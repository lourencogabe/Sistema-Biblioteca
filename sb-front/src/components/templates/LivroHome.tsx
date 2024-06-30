import React, { useEffect, useState } from "react";
import { Livro } from "../../interfaces/Livro";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit} from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

function LivroHome() {
    const [livros, setLivros] = useState<Livro[]>([])

    function carregarLivro() {
        axios.get('http://localhost:5041/biblioteca/api/livro/listar').then(response => {
            setLivros(response.data)
        }).catch(error => {
            console.error("Erro ao buscar lista de livros", error)
        })
    }

    function deletar(id: number) {
        axios.delete('http://localhost:5041/biblioteca/api/autor/deletar/' + id)
            .then(response => { console.log(response) })
            .catch(error => { console.error("Problema ao deletar autor") })
    }

    //Requisição do tipo get para listar livros
    useEffect(() => {
        carregarLivro()
    }, [])

    return (
        <div className=" flex flex-col items-center">
            <div  className="w-full max-w-6xl">
            <section className="w-full max-w-6xl flex justify-between items-center p-2 mb-4 bg-azul-claro rounded-xl shadow-lg">
                    <h1 className="font-mono font-bold text-lg text-verde px-3 ">Lista de Livros</h1>
                    <Link to="/novoLivro" className="rounded-full px-6  hover:bg-azul-claro ">
                        <FaCirclePlus className="text-3xl text-verde"/>
                    </Link>
                </section>
                <table className="w-full mt-6 text-left border-collapse shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-azul-claro text-verde text-center">
                        <tr>
                            <th className="py-3 px-4 font-mono">Id</th>
                            <th className="py-3 px-4 font-mono">Titulo</th>
                            <th className="py-3 px-4 font-mono">Sinopse</th>
                            <th className="py-3 px-4 font-mono">Publicação</th>
                            <th className="py-3 px-4 font-mono">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {livros.map(livro => (
                            <tr key={livro.id} className="shadow-lg rounded-xl hover:bg-gray-100">
                                <td className="py-3 px-4 text-gray-800">{livro.id}</td>
                                <td className="py-3 px-4 text-gray-800">{livro.nomeLivro}</td>
                                <td className="py-3 px-4 text-gray-800">{livro.sinopseLivro}</td>
                                <td className="py-3 px-4 text-gray-800">{livro.dataPublicacaoLivro}</td>
                                <td className="py-3 px-4 text-gray-800">
                                    <button className="m-1 px-4 py-2 bg-verde text-white rounded-lg hover:bg-azul-claro" onClick={() => { deletar(livro.id!) }}><FaTrashAlt className="text-branco" /></button>
                                    <Link className="m-1 px-4 py-2 bg-verde text-white rounded-lg shadow hover:bg-azul-claro transition duration-200 flex items-center justify-center" to={`/alterar/${livro.id}`}><FaEdit className="text-branco" /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LivroHome;