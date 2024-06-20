import React from "react";
import Livro from "./Components/Livro";
import Autor from "./Components/Autor";
import Pesquisador from "./Components/Pesquisador";
import Emprestimos from "./Components/Emprestimo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Livro">Acervo</Link></li>
            <li><Link to="/Autores">Autores</Link></li>
            <li><Link to="/Pesquisadores">Pesquisadores</Link></li>
            <li><Link to="/Emprestimos">Emprestimos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/"></Route>
          <Route path="/Livro" element={<Livro />}></Route>
          <Route path="/Autores" element={<Autor />}></Route>
          <Route path="/Pesquisadores" element={<Pesquisador />}></Route>
          <Route path="/Emprestimos" element={<Emprestimos />}></Route>
        </Routes>
        <footer>Desenvolvido por Grupo 6 ❤️</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
