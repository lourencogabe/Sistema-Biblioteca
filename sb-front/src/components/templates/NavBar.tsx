import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="bg-blue-500 p-1 m-4	rounded-full">
            <div className="flex justify-between items-center">
                <div className="p-1 px-4 text-white text-2xl font-bold ">
                    Sb-Front
                </div>
                <div className="p-1 px-5 space-x-4">
                    <Link className="text-branco hover:text-verde" to="/">Home</Link>
                    <Link className="text-branco hover:text-verde" to="/acervo">Acervo</Link>
                    <Link className="text-branco hover:text-verde" to="/pesquisador">Pesquisadores</Link>
                    <Link className="text-branco hover:text-verde" to="/autor">Autores</Link>
                    <Link className="text-branco hover:text-verde" to="/emprestimo">Emprestimos</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar