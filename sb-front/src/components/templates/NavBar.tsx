import { FaBook,FaHome, FaLinux } from "react-icons/fa"
import { FaUser,FaAddressBook,FaFilePen } from "react-icons/fa6"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="bg-azul-claro p-5 w-56 fixed top-4 left-4 flex flex-col justify-between h-[calc(100vh-2rem)] shadow-lg rounded-xl">
            {/* Cabeçalho com o Título */}
            <div className="flex items-center rounded-full text-white text-2xl font-bold text-azul-escuro">
            <FaLinux />
            <span>CodeTeca</span>
            </div>
            {/* Links do Menu */}
            <div className="mt-6 mb-4 flex flex-col space-y-4 text-lg text-white">
                <Link className="flex items-center space-x-3 hover:text-amarelo px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300" to="/">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link className="flex items-center space-x-3 hover:text-verde px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300" to="/acervo">
                    <FaBook />
                    <span>Acervo</span>
                </Link>
                <Link className="flex items-center space-x-3 hover:text-verde px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300" to="/pesquisador">
                    <FaUser />
                    <span>Pesquisadores</span>
                </Link>
                <Link className="flex items-center space-x-3 hover:text-verde px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300" to="/autor">
                    <FaAddressBook />
                    <span>Autores</span>
                </Link>
                <Link className="flex items-center space-x-3 hover:text-verde px-2 py-1 rounded-md hover:bg-gray-700 transition-all duration-300" to="/emprestimo">
                    <FaFilePen />
                    <span>Empréstimos</span>
                </Link>
            </div>
        </nav>

    )
}

export default NavBar