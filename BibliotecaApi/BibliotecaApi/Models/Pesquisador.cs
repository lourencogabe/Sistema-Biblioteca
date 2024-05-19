namespace API.Models;

public class Pesquisador{
    //Atributos da classe
    public int Id {get; set;}
    public string? NomePesquisador {get; set;}
    public int? DocumentoPesquisador {get; set;}
    public string? EnderecoPesquisador {get; set;}
    
    //Construtor vázio
    public Pesquisador (){
        
    }

    //Construtor com parâmetros
    public Pesquisador(int id, string nomePesquisador, int documentoPesquisador, string enderecoPesquisador){
        Id = id;
        NomePesquisador = nomePesquisador;
        DocumentoPesquisador = documentoPesquisador;
        EnderecoPesquisador = enderecoPesquisador;
    }
}