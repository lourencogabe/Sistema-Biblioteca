//Representa o emprestimo gerado para o livro, data de criação e de retorno estão sendo gerados pela API
export interface Emprestimo{
    id:number
    pesquisadorId:number
    dataEmprestimo:string
    retornoEmprestimo: string
    pesquisador: {
        id: number;
        nomePesquisador: string;
        nacionalidadeAutor: string;
    };
    livro: {
        id: number,
        nomeLivro: string
    }
}
