namespace API.Models;

public class Emprestimo{
    //Atributos da classe
    public int Id {get; set;}
    public DateTime? DataEmprestimo {get; set;}
    public DateTime? RetornoEmprestimo  {get; set;}
    public int? PesquisadorId {get; set;}
    public Pesquisador? Pesquisador {get; set;}
    public int? LivroId {get; set;}
    public Livro? Livro {get; set;}

    
    //Construtor vázio
    public Emprestimo (){
        DataEmprestimo = DateTime.Now;
        RetornoEmprestimo = DataEmprestimo?.AddDays(20);
    }

    //Construtor com parâmetros
    public Emprestimo(int id, int livroId, int pesquisadorId){
        Id = id;
        LivroId = livroId;
        DataEmprestimo = DateTime.Now;
        PesquisadorId = pesquisadorId;
        RetornoEmprestimo = DataEmprestimo?.AddDays(20);
    }
}