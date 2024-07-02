import { BrowserRouter, Route, Routes } from "react-router-dom";

import PerguntaDetails from "./pages/PerguntaDetails";
import PerguntasContainer from './pages/PerguntasContainer';
import TagsPage from "./pages/TagsPage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PerguntasContainer />} />
          <Route path="/" element={<PerguntasContainer />} />
          <Route path="/perguntas/:perguntaId" element={<PerguntaDetails />} />
          <Route path='/tags' element={<TagsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
