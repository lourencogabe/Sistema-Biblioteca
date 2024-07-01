import axios from "axios";
import { useState } from "react";
import { FaArrowCircleLeft, FaCheckCircle, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

function NovoAutor() {
    // Cria as variáveis de manipulação de dados
    const [id, setId] = useState<number>(0);
    const [nomeAutor, setNomeAutor] = useState<string>('');
    const [nacionalidadeAutor, setNacionalidadeAutor] = useState<string>('');

    function handleSubmit(e: any) {
        e.preventDefault();

        // Novo objeto que utiliza as variáveis acima para ser preenchido e enviado via axios
        const novoAutor = {
            id,
            nomeAutor,
            nacionalidadeAutor,
        }

        axios.post('http://localhost:5041/biblioteca/api/autor/cadastrar/', novoAutor)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Problema ao cadastrar o autor:", error);
            });
    }

    return (
        <div className="p-6 bg-azul-claro rounded-lg shadow-lg w-full h-[calc(100vh-2rem)]">
            <h2 className="font-mono text-2xl font-bold flex justify-center text-amarelo mb-4">
                <FaPen className="mx-4 text-3xl" /> Novo Escritor
            </h2>
            <form className="space-y-10" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-mono font-bold text-amarelo">ID</label>
                    <input
                        type='number'
                        value={id}
                        onChange={e => setId(Number(e.target.value))}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-amarelo">Nome do autor:</label>
                    <input
                        type='text'
                        value={nomeAutor}
                        onChange={e => setNomeAutor(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-amarelo">Nacionalidade:</label>
                    <input
                        type="text"
                        value={nacionalidadeAutor}
                        onChange={e => setNacionalidadeAutor(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div className="flex justify-center w-full flex-row text-4xl">
                    <Link className="mx-7 text-vermelho-escuro hover:text-vermelho-claro rounded-md transition-all duration-300" to="/autor">
                        <FaArrowCircleLeft />
                    </Link>
                    <button type='submit' className="text-amarelo hover:text-verde transition-all duration-300">
                        <FaCheckCircle />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NovoAutor;
