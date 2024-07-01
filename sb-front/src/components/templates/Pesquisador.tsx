import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Pesquisador } from "../../interfaces/Pesquisador";
import { FaCirclePlus } from "react-icons/fa6";

function PesquisadorHome() {
    const [pesquisadores, setPesquisadores] = useState<Pesquisador[]>([]);

    // Função para carregar a lista de pesquisadores da API
    function carregarPesquisadores() {
        axios.get('http://localhost:5041/biblioteca/api/pesquisador/listar')
            .then(response => {
                setPesquisadores(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lista de pesquisadores", error);
            });
    }

    // Função para deletar um pesquisador pelo ID
    function deletar(id: number) {
        axios.delete(`http://localhost:5041/biblioteca/api/pesquisador/deletar/${id}`)
            .then(() => {
                alert("Pesquisador deletado com sucesso");
                carregarPesquisadores(); // Atualiza a lista após deletar
            })
            .catch(error => {
                console.error("Problema ao deletar o pesquisador", error);
            });
    }

    // Carregar a lista de pesquisadores quando o componente for montado
    useEffect(() => {
        carregarPesquisadores();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <section className="w-full max-w-6xl flex justify-between items-center p-2 mb-4 bg-azul-claro rounded-xl shadow-lg">
                    <h1 className="font-mono font-bold text-lg text-vermelho-claro px-3">Lista de Pesquisadores</h1>
                    <Link to="/novoPesquisador" className="rounded-full px-6 hover:bg-azul-claro">
                        <FaCirclePlus className="text-3xl text-vermelho-claro" />
                    </Link>
                </section>
                <table className="w-full mt-6 text-left border-collapse shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-azul-claro text-vermelho-claro">
                        <tr>
                            <th className="py-3 px-4 font-mono">Id</th>
                            <th className="py-3 px-4 font-mono">Nome</th>
                            <th className="py-3 px-4 font-mono">Documento</th>
                            <th className="py-3 px-4 font-mono">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {pesquisadores.map(pesquisador => (
                            <tr key={pesquisador.id} className="shadow-lg rounded-xl hover:bg-gray-100">
                                <td className="py-3 px-4 text-gray-800">{pesquisador.id}</td>
                                <td className="py-3 px-4 text-gray-800">{pesquisador.nomePesquisador}</td>
                                <td className="py-3 px-4 text-gray-800">{pesquisador.documentoPesquisador}</td>
                                <td className="py-3 px-4 text-gray-800">
                                    <button
                                        className="my-2 w-14 h-8 bg-vermelho-claro rounded-lg hover:bg-azul-claro transition duration-200 flex items-center justify-center"
                                        onClick={() => { deletar(pesquisador.id) }}
                                    >
                                        <FaTrashAlt className="text-branco" />
                                    </button>
                                    <Link
                                        className="w-14 h-8 bg-vermelho-claro rounded-lg hover:bg-azul-claro transition duration-200 flex items-center justify-center"
                                        to={`/alterarPesquisador/${pesquisador.id}`}
                                    >
                                        <FaEdit className="text-branco" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PesquisadorHome