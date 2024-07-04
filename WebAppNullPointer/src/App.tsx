import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import PerguntaDetails from "./pages/PerguntaDetails";
import PerguntasContainer from './pages/PerguntasContainer';
import TagsPage from "./pages/TagsPage";

import './App.css';
import PerguntaFormPage from "./pages/PerguntaFormPage";
import { useLayoutEffect } from "react";

const Wrapper = ({children}:any) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  
  return children
} 

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/">
            <Route index element={<PerguntasContainer />} />
            <Route path="/pergunta" element={<PerguntaFormPage />} />
            <Route path="/perguntas/:perguntaId" element={<PerguntaDetails />} />
            <Route path='/tags' element={<TagsPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App
