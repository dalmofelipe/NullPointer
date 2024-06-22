import { BrowserRouter, Route, Routes } from "react-router-dom";

import PerguntasContainer from './pages/PerguntasContainer'
import TagsContainer from "./pages/TagsContainer";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PerguntasContainer />} />
          <Route path="/" element={<PerguntasContainer />} />
          <Route path='/tags' element={<TagsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
