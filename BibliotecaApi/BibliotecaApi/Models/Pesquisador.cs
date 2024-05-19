namespace API.Models;

public class Pesquisador{
    //Atributos da classe
    public int Id {get; set;}
    public string? NomePesquisador {get; set;}
    public string? DocumentoPesquisador {get; set;}
    public string? EnderecoPesquisador {get; set;}
    public Emprestimo? Emprestimo{get; set;}

    //Construtor vázio
    public Pesquisador (){
        
    }

    //Construtor com parâmetros
    public Pesquisador(int id, string nomePesquisador, string documentoPesquisador, string enderecoPesquisador){
        Id = id;
        NomePesquisador = nomePesquisador;
        DocumentoPesquisador = documentoPesquisador;
        EnderecoPesquisador = enderecoPesquisador;
    }
}