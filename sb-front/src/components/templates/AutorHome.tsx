import React, { useEffect, useState } from "react";
import { Autor } from "../../interfaces/Autor";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

function AutorHome() {
    const [autores, setAutores] = useState<Autor[]>([])

    function carregarAutores() {
        axios.get('http://localhost:5041/biblioteca/api/autor/listar')
            .then(response => setAutores(response.data))
            .catch(error => { console.error("Erro ao buscar lista de autores", error) });
    }

    function deletar(id: number) {
        axios.delete('http://localhost:5041/biblioteca/api/autor/deletar/' + id)
            .then(response => { console.log(response) })
            .catch(error => { console.error("Problema ao deletar autor") })
    }

    useEffect(() => {
        carregarAutores();
    }, [])

    return (
<div className="flex flex-col items-center">
    <div className="w-full max-w-6xl">
        <section className="w-full max-w-6xl flex justify-between items-center p-2 mb-4 bg-azul-claro rounded-xl shadow-lg">
            <h1 className="font-mono font-bold text-lg text-amarelo px-3">Autores</h1>
            <Link to="/novoAutor" className="rounded-full px-6 hover:bg-azul-claro">
                <FaCirclePlus className="text-3xl text-amarelo"/>
            </Link>
        </section>
        <table className="w-full mt-6 text-left border-collapse shadow-md rounded-xl overflow-hidden">
            <thead className="bg-azul-claro text-amarelo text-center">
                <tr>
                    <th className="py-3 px-10 font-mono">Id</th>
                    <th className="py-3 px-10 font-mono">Nome</th>
                    <th className="py-3 px-10 font-mono">Origem</th>
                    <th className="py-3 px-10 font-mono">Ações</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {autores.map(autor => (
                    <tr key={autor.id} className="shadow-lg rounded-xl hover:bg-gray-100 text-center">
                        <td className="py-3 px-10 text-gray-800">{autor.id}</td>
                        <td className="py-3 px-10 text-gray-800">{autor.nomeAutor}</td>
                        <td className="py-3 px-10 text-gray-800">{autor.nacionalidadeAutor}</td>
                        <td className="py-3 px-10 text-gray-800 flex flex-col items-center space-y-2">
                            <button
                                className="w-14 h-8 bg-amarelo rounded-lg hover:bg-azul-claro transition duration-200 flex items-center justify-center"
                                onClick={() => { deletar(autor.id!) }}
                            >
                                <FaTrashAlt className="text-branco"/>
                            </button>
                            <Link
                                className="w-14 h-8 bg-amarelo rounded-lg hover:bg-azul-claro transition duration-200 flex items-center justify-center"
                                to={`/autorEditar/${autor.id}`}
                            >
                                <FaEdit className="text-branco"/>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
    )
}

export default AutorHome;