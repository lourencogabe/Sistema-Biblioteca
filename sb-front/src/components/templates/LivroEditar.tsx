import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Livro } from "../../interfaces/Livro";

function LivroEditar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nomeLivro, setNomeLivro] = useState("");
  const [autorId, setAutorId] = useState("");
  const [sinopseLivro, setSinopseLivro] = useState("");
  const [dataPublicacaoLivro, setDataPublicacaoLivro] = useState("");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5225/api/livro/buscar/${id}`)
        .then((response) => {
          const livro: Livro = response.data;
          setNomeLivro(livro.nomeLivro);
          setAutorId(livro.autorId);
          setSinopseLivro(livro.sinopseLivro);
          setDataPublicacaoLivro(livro.dataPublicacaoLivro);
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
      dataPublicacaoLivro: dataPublicacaoLivro,
  };

    axios.put(`http://localhost:5225/api/livro/alterar/${id}`, livro)
      .then((response) => {
        navigate("/pages/livro/listar");
      })
      .catch((error) => {
        console.error("Erro ao alterar livro:", error);
      });
  }

  return (
    <div>
      <h1>Alterar Livro</h1>
      <form onSubmit={alterarLivro}>
        <label>Nome do Livro:</label>
        <input
          type="text"
          value={nomeLivro}
          placeholder="Digite o nome do livro"
          onChange={(e: any) => setNomeLivro(e.target.value)}
          required
        />
        <br />
        <label>Autor ID:</label>
        <input
          type="text"
          value={autorId}
          placeholder="Digite o ID do autor"
          onChange={(e: any) => setAutorId(e.target.value)}
          required
        />
        <br />
        <label>Sinopse do Livro:</label>
        <input
          type="text"
          value={sinopseLivro}
          placeholder="Digite a sinopse do livro"
          onChange={(e: any) => setSinopseLivro(e.target.value)}
          required
        />
        <br />
        <label>Data de Publicação:</label>
        <input
          type="date"
          value={dataPublicacaoLivro}
          onChange={(e: any) => setDataPublicacaoLivro(e.target.value)}
          required
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default LivroEditar;
