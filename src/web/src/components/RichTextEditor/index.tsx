import JoditEditor from 'jodit-react';
import { Dispatch, SetStateAction, useMemo, useRef } from 'react';
import "./custom-dark.css";
import "./styles.css";

interface RichTextEditorProps {
  mensagem: string;
  setMensagem: Dispatch<SetStateAction<string>>;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ mensagem, setMensagem }) => {
  const editor = useRef(null);
  // const [content, setContent] = useState('');
  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      theme: 'dark',
      toolbarSticky: false,
      language: 'pt_br',
      buttons: 'bold,italic,underline,|,ul,ol,|,image,table,link',
      uploader: {
        insertImageAsBase64URI: true
      }
    }),
    []
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
