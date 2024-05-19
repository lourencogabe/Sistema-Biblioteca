using Microsoft.EntityFrameworkCore;

namespace API.Models;

public class AppDataContext : DbContext{
    public DbSet<Livro> TabelaLivros{ get; set; }
    public DbSet<Autor> TabelaAutor { get; set; }
    public DbSet<Pesquisador> TabelaPesquisador { get; set; }
    public DbSet<Emprestimo> TabelaEmprestimo { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
        optionsBuilder.UseSqlite("Data Source=app.db");
    }
}