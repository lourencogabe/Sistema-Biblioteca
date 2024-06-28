import React, { useEffect, useState } from "react";
import { Autor } from "../../interfaces/Autor";
import axios from "axios";
import { Link } from "react-router-dom";

function AutorHome() {
    const [autores, setAutores] = useState<Autor[]>([])

    function carregarAutores() {
        axios.get('http://localhost:5041/biblioteca/api/autor/listar')
            .then(response => setAutores(response.data))
            .catch(error => { console.error("Erro ao buscar lista de autores", error) });
    }

    function deletar(id:number) {
        axios.delete('http://localhost:5041/biblioteca/api/autor/deletar/'+id)
            .then(response => { console.log(response) })
            .catch(error => { console.error("Problema ao deletar autor") })
    }

    useEffect(() => {
        carregarAutores();
    }, [])

    return (
        <div>
            <h1>Lista Autores</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nacionalidade Autor</th>
                    <th>Nome do Autor</th>
                </tr>
            </table>
            <tbody>
                {autores.map(autor => (
                    <tr>
                        <td>{autor.id}</td>
                        <td>{autor.nacionalidadeAutor}</td>
                        <td>{autor.nomeAutor}</td>
                        <td>
                            <button onClick={() => {deletar(autor.id!)}}>
                            Deletar
                            </button>
                        </td>
                        <td><button><Link to="/AutorEditar"/>Alterar</button></td>
                    </tr>

                ))}
            </tbody>
        </div>
    )
}

export default AutorHome;