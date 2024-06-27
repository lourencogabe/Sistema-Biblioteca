import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import LivroHome from "./components/templates/LivroHome"
import Pesquisador from "./components/templates/Pesquisador"
import Autor from "./components/templates/Autor"
import Emprestimos from "./components/templates/Emprestimo"


function App() {
  return (
    <div className="min-h-screen bg-cinza-escuro flex flex-col">
      <BrowserRouter>

      <Routes>
        <Route path="/acervo" element={<LivroHome/>}/>
        <Route path="/pesquisador" element={<Pesquisador/>}/>
        <Route path="/autor" element={<Autor/>}/>
        <Route path="/emprestimo" element={<Emprestimos/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
