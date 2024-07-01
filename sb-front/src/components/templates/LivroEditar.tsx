import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Livro } from "../../interfaces/Livro";
import { FaArrowCircleLeft, FaBookReader, FaCheckCircle } from "react-icons/fa";

function LivroEditar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nomeLivro, setNomeLivro] = useState("");
  const [autorId, setAutorId] = useState<number>(0);
  const [sinopseLivro, setSinopseLivro] = useState("");
  const [dataPublicacaoLivro, setDataPublicacaoLivro] = useState("");
  const [autor, setAutor] = useState({ id: 0, nomeAutor: '', nacionalidadeAutor: '' });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5041/biblioteca/api/livro/buscar/${id}`)
        .then((response) => {
          const livro: Livro = response.data;
          setNomeLivro(livro.nomeLivro);
          setAutorId(livro.autorId);
          setSinopseLivro(livro.sinopseLivro);
          setDataPublicacaoLivro(livro.dataPublicacaoLivro);
          setAutor(livro.autor);
        })
        .catch((error) => {
          console.error("Erro ao buscar livro:", error);
        });
    }
  }, [id]);

  function alterarLivro(e: any) {
    e.preventDefault();

    const livro: Livro = {
      id: 0,
      nomeLivro: nomeLivro,
      autorId: autorId,
      sinopseLivro: sinopseLivro,
      autor:autor,
      dataPublicacaoLivro: dataPublicacaoLivro
  };

    axios.put(`http://localhost:5041/biblioteca/api/livro/atualizar/${id}`, livro)
      .then((response) => {
        alert("Alteração do livro feita com sucesso");
        navigate("/alunos");
      })
      .catch((error) => {
        console.error("Erro ao alterar livro:", error);
      });
  }

  return (
    <div className="p-6 bg-azul-claro rounded-lg shadow-lg w-full h-[calc(100vh-2rem)]">
        <h2 className="font-mono text-2xl font-bold flex justify-center text-verde mb-4">
            <FaBookReader className="mx-4 text-3xl" /> Alterar Livro
        </h2>
        <form className="space-y-10" onSubmit={alterarLivro}>
            <div>
                <label className="block text-sm font-mono font-bold text-verde">
                    Nome do Livro:
                </label>
                <input
                    type="text"
                    value={nomeLivro}
                    placeholder="Digite o nome do livro"
                    onChange={e => setNomeLivro(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-mono font-bold text-verde">
                    Autor ID:
                </label>
                <input
                    type="number"
                    value={autorId}
                    placeholder="Digite o ID do autor"
                    onChange={e => setAutorId(Number(e.target.value))}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-mono font-bold text-verde">
                    Sinopse do Livro:
                </label>
                <input
                    type="text"
                    value={sinopseLivro}
                    placeholder="Digite a sinopse do livro"
                    onChange={e => setSinopseLivro(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-mono font-bold text-verde">
                    Data de Publicação:
                </label>
                <input
                    type="date"
                    value={dataPublicacaoLivro}
                    onChange={e => setDataPublicacaoLivro(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-verde-escuro focus:border-verde-escuro sm:text-sm"
                />
            </div>
            <div className="flex justify-center w-full flex-row text-4xl">
                <Link className="mx-7 text-vermelho-escuro hover:text-vermelho-claro rounded-md transition-all duration-300" to="/acervo">
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

export default LivroEditar;
