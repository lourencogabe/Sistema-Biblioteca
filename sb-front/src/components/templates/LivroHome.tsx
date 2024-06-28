import React, { useEffect, useState } from "react";
import { Livro } from "../../interfaces/Livro";
import axios from "axios";
import { Link } from "react-router-dom";

function LivroHome() {
    const [livros, setLivros] = useState<Livro[]>([])
    
    function carregarLivro(){
        axios.get('http://localhost:5041/biblioteca/api/livro/listar').then(response =>{
            setLivros(response.data)
        }).catch(error => {
            console.error("Erro ao buscar lista de livros", error)
        })
    }

    function deletar(id:number) {
        axios.delete('http://localhost:5041/biblioteca/api/autor/deletar/'+id)
            .then(response => { console.log(response) })
            .catch(error => { console.error("Problema ao deletar autor") })
    }
    
    //Requisição do tipo get para listar livros
    useEffect(()=> {
        carregarLivro()
    }, [])

    return (
        <div className="m-4">
            <h1 className="p-1 px-5 mx-20 bg-cinza-claro rounded-full font-mono text-lg text-center text-verde">Lista de Livros</h1>
            <table className="m-7 border-2">
                <thead className="border-2">
                    <tr className="">
                        <th className="font-semibold text-branco">Id</th>
                        <th className="font-semibold text-branco">Titulo</th>
                        <th className="font-semibold text-branco">Sinopse</th>
                        <th className="font-semibold text-branco">Publicação</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro =>(
                        <tr key={livro.id}>
                            <td className="font-sans text-branco" >{livro.id}</td>
                            <td className="font-sans text-branco" >{livro.nomeLivro}</td>
                            <td className="font-sans text-branco">{livro.sinopseLivro}</td>
                            <td className="font-sans text-branco">{livro.dataPublicacaoLivro}</td>
                            <td>
                            <button onClick={() => {deletar(livro.id!)}}>
                            Deletar
                            </button>
                        </td>
                        <td><button type="submit"><Link to={`/alterar/${livro.id}`}>Alterar</Link></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit"><Link to="/novoLivro">Novo Livro</Link></button>
        </div>
    )
}

export default LivroHome;