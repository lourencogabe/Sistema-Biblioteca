import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import LivroHome from "./components/templates/LivroHome"
import Pesquisador from "./components/templates/Pesquisador"
import Autor from "./components/templates/AutorHome"
import Emprestimos from "./components/templates/Emprestimo"
import NavBar from "./components/templates/NavBar"
import NovoLivro from "./components/templates/NovoLivro"
import AutorHome from "./components/templates/AutorHome"
import AutorEditar from "./components/templates/AutorEditar"
import LivroEditar from "./components/templates/LivroEditar"


function App() {
  return (
    <div className="min-h-screen bg-cinza-escuro flex flex-col">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/acervo" element={<LivroHome/>}/>
        <Route path="/pesquisador" element={<Pesquisador/>}/>
        <Route path="/autor" element={<AutorHome/>}/>
        <Route path="/emprestimo" element={<Emprestimos/>}/>
        <Route path="/novoLivro" element={<NovoLivro/>}/>
        <Route path="/alterar/:id" element={<LivroEditar/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
