import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Autor } from "../../interfaces/Autor";
import { FaArrowCircleLeft, FaUserEdit, FaCheckCircle } from "react-icons/fa";

function AutorEditar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nomeAutor, setNomeAutor] = useState("");
    const [nacionalidadeAutor, setNacionalidadeAutor] = useState("");

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5041/biblioteca/api/autor/buscar/${id}`)
                .then((response) => {
                    const autor: Autor = response.data;
                    setNomeAutor(autor.nomeAutor);
                    setNacionalidadeAutor(autor.nacionalidadeAutor);
                })
                .catch((error) => {
                    console.error("Erro ao buscar autor:", error);
                });
        }
    }, [id]);

    function alterarAutor(e: any) {
        e.preventDefault();

        const autor: Autor = {
            id: Number(id),  // O ID deve ser passado para a atualização
            nomeAutor: nomeAutor,
            nacionalidadeAutor: nacionalidadeAutor,
        };

        axios.put(`http://localhost:5041/biblioteca/api/autor/atualizar/${id}`, autor)
            .then((response) => {
                alert("Alteração do autor feita com sucesso");
                navigate("/autor");  // Redirecionar para a lista de autores após o sucesso
            })
            .catch((error) => {
                console.error("Erro ao alterar autor:", error);
            });
    }

    return (
        <div className="p-6 bg-azul-claro rounded-lg shadow-lg w-full h-[calc(100vh-2rem)]">
            <h2 className="font-mono text-2xl font-bold flex justify-center text-verde mb-4">
                <FaUserEdit className="mx-4 text-3xl" /> Alterar Autor
            </h2>
            <form className="space-y-10" onSubmit={alterarAutor}>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Nome do Autor:
                    </label>
                    <input
                        type="text"
                        value={nomeAutor}
                        placeholder="Digite o nome do autor"
                        onChange={e => setNomeAutor(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Nacionalidade do Autor:
                    </label>
                    <input
                        type="text"
                        value={nacionalidadeAutor}
                        placeholder="Digite a nacionalidade do autor"
                        onChange={e => setNacionalidadeAutor(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                    />
                </div>
                <div className="flex justify-center w-full flex-row text-4xl">
                    <Link className="mx-7 text-vermelho-escuro hover:text-vermelho-claro rounded-md transition-all duration-300" to="/autor">
                        <FaArrowCircleLeft />
                    </Link>
                    <button type="submit" className="text-verde hover:text-amarelo transition-all duration-300">
                        <FaCheckCircle />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AutorEditar;
