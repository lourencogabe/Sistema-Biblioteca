import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Livro from "./components/Livro";
import Autor from "./components/Autor";
import Emprestimos from "./components/Emprestimo";
import Pesquisador from "./components/Pesquisador";

function App() {
  return (
    <BrowserRouter>
    
    <nav className="bg-blue-500 p-1 m-4	rounded-full">
      <div className="flex justify-between items-center">
        <div className="p-1 px-4 text-white text-2xl font-bold ">
          Sb-Front
        </div>
        <div className="p-1 px-5 space-x-4">
          <Link className="text-white hover:text-gray-200" to="/">Home</Link>
          <Link className="text-white hover:text-gray-200" to="/acervo">Acervo</Link>
          <Link className="text-white hover:text-gray-200" to="/pesquisador">Pesquisadores</Link>
          <Link className="text-white hover:text-gray-200" to="/autor">Autores</Link>
          <Link className="text-white hover:text-gray-200" to="/emprestimo">Emprestimos</Link>
        </div>
      </div>
    </nav>


      <Routes>
        <Route path="/acervo" element={<Livro/>}/>
        <Route path="/pesquisador" element={<Pesquisador/>}/>
        <Route path="/autor" element={<Autor/>}/>
        <Route path="/emprestimo" element={<Emprestimos/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
