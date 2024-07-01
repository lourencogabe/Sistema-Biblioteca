//Representa um Livro
    export interface Livro{
        id:number
        nomeLivro:string
        autorId:number
        sinopseLivro:string
        dataPublicacaoLivro:string
        autor: {
            id: number;
            nomeAutor: string;
            nacionalidadeAutor: string;
        };
    }
