import JoditEditor from 'jodit-react';
import { useMemo, useRef, useState, useCallback } from 'react';
import "./custom-dark.css";
import "./styles.css";

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
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

   // Função para atualizar o estado com useCallback para memorizar a função
  const handleUpdateContent = useCallback((newContent:string) => {
    setContent(newContent);
  }, []);

  return (    
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={newContent => setContent(newContent)}
      //onChange={newContent => {}}
    />
  );
};

export default RichTextEditor;
