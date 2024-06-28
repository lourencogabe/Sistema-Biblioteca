import axios from "axios"
import { useState } from "react"

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
        .catch(error =>{console.error("Problema ao cadastrar o livro")})
    }

    return (
        <div>
            <h2>Novo Livro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID do Livro:
                    <input type='number' value={id} onChange={e => Setid(Number(e.target.value))} required/>
                </label>
                <label>
                    Titulo do Livro:
                    <input type='text' value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} required/>
                </label>
                <label>
                    Autor Id:
                    <input type="number" value={autorId} onChange={e => setAutorId(Number(e.target.value))}/>
                </label>
                <label>
                    Sinopse:
                    <input type="text" value={sinopseLivro} onChange={e => setSinopseLivro(e.target.value)} required/>
                </label>
                <label>
                    Data de Publicação:
                    <input type="text" value={dataPublicacaoLivro} onChange={e => setDataPublicacaoLivro(e.target.value)} required/>
                </label>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default NovoLivro;