import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Livro from "../templates/Livro";
import Emprestimos from "../templates/Emprestimo";
import Pesquisador from "../templates/Pesquisador";
import Autor from "../templates/Autor";
import NavLink from "../molecules/Navlink";


function NavBar() {
    return (
        <BrowserRouter>
            <nav className="bg-cinza-claro p-1 m-4 rounded-full">
                <div className="flex justify-between items-center">
                    <div className="p-1 px-4 text-azul-principal text-2xl font-mono">
                    Sb-Front
                    </div>
                        <NavLink/>
                    </div>
            </nav>
            <Routes>
                <Route path="/acervo" element={<Livro />}></Route>
                <Route path="/emprestimo" element={<Emprestimos />}></Route>
                <Route path="/pesquisador" element={<Pesquisador />}></Route>
                <Route path="/autor" element={<Autor />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar;