namespace API.Models;

public class Livro{
    //Atributos da classe
    public int Id {get; set;}
    public string? NomeLivro {get; set;}
    public string? AtorLivro {get; set;}
    public string? SinopseLivro {get; set;}
    public string? DataPublicacaoLivro {get; set;}
    
    //Construtor vázio
    public Livro (){
        
    }

    //Construtor com parâmetros
    public Livro(int id, string nomeLivro, string atorLivro, string sinopseLivro, string dataPublicacaoLivro){
        Id = id;
        NomeLivro = nomeLivro;
        AtorLivro = atorLivro;
        SinopseLivro = sinopseLivro;
        DataPublicacaoLivro = dataPublicacaoLivro;
    }
}