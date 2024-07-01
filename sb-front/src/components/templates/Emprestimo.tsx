import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Emprestimo } from "../../interfaces/Emprestimo";

function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);

  function carregarEmprestimos() {
      axios.get('http://localhost:5041/biblioteca/api/emprestimo/listar')
          .then(response => {
              setEmprestimos(response.data);
          })
          .catch(error => {
              console.error("Erro ao buscar lista de empréstimos", error);
          });
  }

  function deletar(id: number) {
      axios.delete(`http://localhost:5041/biblioteca/api/emprestimo/deletar/${id}`)
          .then(() => {
              alert("Empréstimo deletado com sucesso");
              carregarEmprestimos(); // Atualiza a lista após deletar
          })
          .catch(error => {
              console.error("Problema ao deletar o empréstimo", error);
          });
  }

  useEffect(() => {
      carregarEmprestimos();
  }, []);

  return (
      <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl">
              <section className="w-full max-w-6xl flex justify-between items-center p-2 mb-4 bg-azul-claro rounded-xl shadow-lg">
                  <h1 className="font-mono font-bold text-lg text-roxo px-3">Lista de Empréstimos</h1>
                  <Link to="/novoEmprestimo" className="rounded-full px-6 hover:bg-azul-claro">
                      <FaCirclePlus className="text-3xl text-roxo" />
                  </Link>
              </section>
              <table className="w-full mt-6 text-left border-collapse shadow-md rounded-xl overflow-hidden">
                  <thead className="bg-azul-claro text-roxo">
                      <tr>
                          <th className="py-3 px-4 font-mono">Id</th>
                          <th className="py-3 px-4 font-mono">Pesquisador</th>
                          <th className="py-3 px-4 font-mono">Livro</th>
                          <th className="py-3 px-4 font-mono">Data Empréstimo</th>
                          <th className="py-3 px-4 font-mono">Data Retorno</th>
                          <th className="py-3 px-4 font-mono">Ações</th>
                      </tr>
                  </thead>
                  <tbody className="bg-white">
                      {emprestimos.map(emprestimo => (
                          <tr key={emprestimo.id} className="shadow-lg rounded-xl hover:bg-gray-100">
                              <td className="py-3 px-4 text-gray-800">{emprestimo.id}</td>
                              <td className="py-3 px-4 text-gray-800">{emprestimo.pesquisador.nomePesquisador}</td>
                              <td className="py-3 px-4 text-gray-800">{emprestimo.livro.nomeLivro}</td>
                              <td className="py-3 px-4 text-gray-800">{emprestimo.dataEmprestimo}</td>
                              <td className="py-3 px-4 text-gray-800">{emprestimo.retornoEmprestimo}</td>
                              <td className="py-3 px-4 text-gray-800">
                                  <button
                                      className="m-1 px-4 py-2 bg-roxo text-white rounded-lg hover:bg-azul-claro"
                                      onClick={() => { deletar(emprestimo.id) }}
                                  >
                                      <FaTrashAlt className="text-branco" />
                                  </button>
                                  <Link
                                      className="m-1 px-4 py-2 bg-roxo text-white rounded-lg shadow hover:bg-azul-claro transition duration-200 flex items-center justify-center"
                                      to={`/alterarEmprestimo/${emprestimo.id}`}
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

export default Emprestimos;