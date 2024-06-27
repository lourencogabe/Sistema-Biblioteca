import React, { useEffect, useState } from "react";
import { Livro } from "../../interfaces/Livro";
import axios from "axios";

function LivroHome() {
    const [livros, setLivros] = useState<Livro[]>([])
    
    //Requisição do tipo get para listar livros
    useEffect(()=> {
        axios.get('http://localhost:5041/biblioteca/api/livro/listar').then(response =>{
            setLivros(response.data)
        }).catch(error => {
            console.error("Erro ao buscar requisicao", error)
        })
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LivroHome;