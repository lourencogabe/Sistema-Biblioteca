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
            <h1 className="p-1 px-5 mx-20 bg-cinza-claro rounded-full font-mono text-lg text-center text-branco">Lista de Livros</h1>
            <table className="m-7">
                <thead className="">
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Sinopse</th>
                        <th >Publicação</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map(livro =>(
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.nomeLivro}</td>
                            <td>{livro.sinopseLivro}</td>
                            <td>{livro.dataPublicacaoLivro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LivroHome;