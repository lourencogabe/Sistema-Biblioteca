import axios from "axios"
import { useState } from "react"
import { FaArrowCircleLeft, FaBookReader, FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function NovoLivro() {
    //Cria as variáveis de manipulação de dados
    const [id, Setid] = useState<number>()
    const [nomeLivro, setNomeLivro] = useState<string>('')
    const [autorId, setAutorId] = useState<number>(0)
    const [sinopseLivro, setSinopseLivro] = useState<string>('')
    const [dataPublicacaoLivro, setDataPublicacaoLivro] = useState<string>('')

    function handleSubmit(e: any) {
        e.preventDefault();

        //Novo objeto que utiliza as variaveis acima para ser preenchido e enviado via axios
        const novoLivro = {
            id,
            nomeLivro,
            autorId,
            sinopseLivro,
            dataPublicacaoLivro
        }

        axios.post('http://localhost:5041/biblioteca/api/livro/cadastrar', novoLivro)
            .then(response => { console.log(response) })
            .catch(error => { console.error("Problema ao cadastrar o livro") })
    }

    return (
        <div className="p-6  bg-azul-claro rounded-lg  shadow-lg w-full h-[calc(100vh-2rem)]">
            <h2 className="font-mono text-2xl font-bold flex justify-center text-verde mb-4"><FaBookReader className="mx-4 text-3xl"/> Novo Livro
            </h2>
            <form className="space-y-10">
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        ID do Livro:
                    </label>
                    <input
                        type='number'
                        value={id}
                        onChange={e => Setid(Number(e.target.value))}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Título do Livro:
                    </label>
                    <input
                        type='text'
                        value={nomeLivro}
                        onChange={e => setNomeLivro(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2  rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Autor Id:
                    </label>
                    <input
                        type="number"
                        value={autorId}
                        onChange={e => setAutorId(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Sinopse:
                    </label>
                    <input
                        type="text"
                        value={sinopseLivro}
                        onChange={e => setSinopseLivro(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-lg focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-mono font-bold text-verde">
                        Data de Publicação:
                    </label>
                    <input
                        type="text"
                        value={dataPublicacaoLivro}
                        onChange={e => setDataPublicacaoLivro(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-azul-claro focus:border-azul-claro sm:text-sm"
                    />
                </div>
                <div className="flex justify-center w-full flex-row text-4xl">
                    <Link className="mx-7 text-vermelho-escuro hover:text-vermelho-claro rounded-md  transition-all duration-300" to="/acervo">
                        <FaArrowCircleLeft />
                    </Link>
                    <button type='submit' className="text-verde hover:text-amarelo transition-all duration-300">
                        <FaCheckCircle />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NovoLivro;