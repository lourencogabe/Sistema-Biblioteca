namespace API.Models;

public class Autor{
    //Atributos da classe
    public int Id {get; set;}
    public string? NomeAutor {get; set;}
    public string? NacionalidadeAutor {get; set;}
    public Livro? Livro{get; set;}

    //Construtor vázio
    public Autor (){
        
    }

    //Construtor com parâmetros
    public Autor(int id, string nomeAutor, string nacionalidadeAutor){
        Id = id;
        NomeAutor = nomeAutor;
        NacionalidadeAutor = nacionalidadeAutor;
    }
}