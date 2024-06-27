import { Link } from "react-router-dom";

function NavLink(){
    return(
        <div className="p-1 px-4 space-x-4">
            <Link className="font-mono text-branco hover:text-azul-principal" to="/">Inicio</Link>
            <Link className="font-mono text-branco hover:text-azul-principal" to="/acervo">Acervo</Link>
            <Link className="font-mono text-branco hover:text-azul-principal" to="/emprestimo">Emprestimos</Link>
            <Link className="font-mono text-branco hover:text-azul-principal" to="/pesquisador">Pesquisadores</Link>
            <Link className="font-mono text-branco hover:text-azul-principal" to="/autor">Escritores</Link>
        </div>
    )
}

export default NavLink;