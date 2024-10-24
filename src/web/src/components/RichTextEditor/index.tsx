import JoditEditor from 'jodit-react';
import { Dispatch, SetStateAction, useMemo, useRef } from 'react';
import "./custom-dark.css";
import "./styles.css";
import { isJoditObject } from 'jodit/esm/core/helpers';
import { IUploader, IUploaderAnswer, IUploaderData } from 'jodit/esm/types';

interface RichTextEditorProps {
  mensagem: string;
  setMensagem: Dispatch<SetStateAction<string>>;
}

// Função para formatar nome do arquivo
const generateFileName = (originalFileName: string): string => {

  const extension = originalFileName.substring(originalFileName.lastIndexOf("."));
  
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  const randomSequence = Math.random().toString().substring(2, 8);
  
  return `${year}${month}${day}_${hours}${minutes}_${randomSequence}${extension}`;
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ mensagem, setMensagem }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      theme: 'dark',
      toolbarSticky: false,
      language: 'pt_br',
      buttons: 'bold,italic,underline,|,ul,ol,|,image,table,link',
      uploader: {
        url: 'http://localhost:8000/upload/file',
        method: 'POST',
        format: 'json',
        withCredentials: false,
        pathVariableName: 'file',
        insertImageAsBase64URI: false,
        filesVariableName(): string {
          // Edita header 'Content Disposition' name para 'file', atendendo ao backend
          return `file`;
        },
        processFileName(
          this: IUploader, key: string, file: File, name: string
        ) : [string, File, string] {
          // renomeia imagem antes de salva-la
          const customFileName = generateFileName(name);
          return [key, file, customFileName];
        },
        process(this: IUploader, resp: any): IUploaderData {          
          let response;
          if (typeof resp === 'string') {
            try {
              response = JSON.parse(resp);
            } catch (error) {
              return { files: [], baseurl: '' };
            }
          } else if (typeof resp === 'object') {
            response = resp;
          } else {
            return { files: [], baseurl: '' };
          }

          if (response.success === 1 && response.file && response.file.url) {
            return {
              files: [response.file.url],
              baseurl: '',
              isImages: [true]
            };
          } else {
            console.error('Resposta do servidor inválida:', response);
            return { files: [], baseurl: '' };
          }
        },
        defaultHandlerSuccess(this: IUploader, resp: IUploaderData) {
          const j = this.j || this;
      
          if (!isJoditObject(j)) {
            return;
          }
      
          if (resp.files && resp.files.length) {
            resp.files.forEach((fileUrl: string, index: number) => {
              const [tagName, attr]: string[] =
                resp.isImages && resp.isImages[index]
                  ? ['img', 'src']
                  : ['a', 'href'];

              if (tagName === 'img') {
                // Adiciona um pequeno atraso antes de tentar carregar a imagem
                setTimeout(() => {
                  const img = new Image();
                  img.onload = () => {
                    const elm = j.createInside.element(tagName);
                    elm.setAttribute(attr, fileUrl);
                    j.s.insertImage(elm as HTMLImageElement, null, j.o.imageDefaultWidth);
                  };
                  img.onerror = () => {
                    console.error('Erro ao carregar a imagem:', fileUrl);
                    j.e.fire('errorMessage', 'Não foi possível carregar a imagem');
                  };
                  img.src = fileUrl;
                }, 500);  // Espera 500ms antes de tentar carregar a imagem
              } else {
                const elm = j.createInside.element(tagName);
                elm.setAttribute(attr, fileUrl);
                elm.textContent = fileUrl.split('/').pop() || fileUrl;
                j.s.insertNode(elm);
              }
            });
          }
        },
      }
    }), []
  );

  return (    
    <JoditEditor
      ref={editor}
      value={mensagem}
      config={config}
      onBlur={newContent => setMensagem(newContent)}
    />
  );
};

export default RichTextEditor;
