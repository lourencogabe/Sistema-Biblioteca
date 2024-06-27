using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDataContext>();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(c => {
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});

Livro livro = new Livro();

//Classe Livro

app.MapGet("/biblioteca/api/livro/buscar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.TabelaLivros.Include(x => x.Autor).FirstOrDefault(x => x.Id == id);

    if (livro is null)
    {
        return Results.NotFound("Livro nao encontrado!");
    }

    return Results.Ok(livro);
});

app.MapGet("/biblioteca/api/livro/listar", ([FromServices] AppDataContext ctx) =>
{

    if (ctx.TabelaLivros is null)
    {
        return Results.NotFound("Acervo vázio!");
    }

    return Results.Ok(ctx.TabelaLivros.ToList());
});

app.MapPost("/biblioteca/api/livro/cadastrar", ([FromBody] Livro livro, [FromServices] AppDataContext ctx) =>
{
    ctx.TabelaLivros.Add(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro cadastrado com sucesso! " + livro.NomeLivro);
});

app.MapDelete("/biblioteca/api/livro/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.TabelaLivros.Find(id);

    if (livro is null)
    {
        return Results.NotFound("Livro não encontrado no acervo!");
    }

    ctx.TabelaLivros.Remove(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro removido com sucesso! Nome: " + livro.NomeLivro);
});

app.MapPut("/biblioteca/api/livro/atualizar/{id}", ([FromRoute] int id, [FromBody] Livro livroAtualizado, [FromServices] AppDataContext ctx) =>
{
    Livro? livro = ctx.TabelaLivros.Find(id);

    if (livro is null)
    {
        return Results.NotFound();
    }

    livro.NomeLivro = livroAtualizado.NomeLivro;
    livro.AutorId = livroAtualizado.AutorId;
    livro.SinopseLivro = livroAtualizado.SinopseLivro;
    livro.DataPublicacaoLivro = livroAtualizado.DataPublicacaoLivro;

    ctx.TabelaLivros.Update(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro alterado com sucesso! Nome: " + livro.NomeLivro);
});

//Classe Autor

app.MapGet("/biblioteca/api/autor/listar", ([FromServices] AppDataContext ctx) =>
{

    if (ctx.TabelaAutor is null)
    {
        return Results.NotFound("Nenhum autor encontrado nos registros!");
    }

    return Results.Ok(ctx.TabelaAutor.ToList());
});

app.MapPost("/biblioteca/api/autor/cadastrar/", ([FromBody] Autor autor, [FromServices] AppDataContext ctx) =>
{
    ctx.TabelaAutor.Add(autor);
    ctx.SaveChanges();

    return Results.Ok("Autor " + autor.NomeAutor + ", cadastrado com sucesso nos registros!");
});

app.MapDelete("/biblioteca/api/autor/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Autor? autor = ctx.TabelaAutor.Find(id);

    if (autor is null)
    {
        return Results.NotFound("Autor não encontrado nos registros!");
    }

    ctx.TabelaAutor.Remove(autor);
    ctx.SaveChanges();

    return Results.Ok("Autor " + autor.NomeAutor + " removido dos registros com sucesso!");
});

app.MapPut("biblioteca/api/autor/atualizar/{id}", ([FromRoute] int id, [FromBody] Autor autorAtualizado, [FromServices] AppDataContext ctx) =>
{
    Autor? autor = ctx.TabelaAutor.Find(id);

    if (autor is null)
    {
        return Results.NotFound("Autor não encontrado para ajuste!");
    }

    autor.Id = autorAtualizado.Id;
    autor.NomeAutor = autorAtualizado.NomeAutor;
    autor.NacionalidadeAutor = autorAtualizado.NacionalidadeAutor;

    ctx.TabelaAutor.Update(autor);
    ctx.SaveChanges();

    return Results.Ok("Autor " + autor.NomeAutor + ", alterado com sucesso!");
});

//Classe Pesquisador

app.MapGet("/biblioteca/api/pesquisador/listar", ([FromServices] AppDataContext ctx) =>
{

    if (ctx.TabelaPesquisador is null)
    {
        return Results.NotFound("Nenhum pesquisador(a) encontrado nos registros!");
    }

    return Results.Ok(ctx.TabelaPesquisador.ToList());
});

app.MapPost("/biblioteca/api/pesquisador/cadastrar", ([FromBody] Pesquisador pesquisador, [FromServices] AppDataContext ctx) =>
{
    ctx.TabelaPesquisador.Add(pesquisador);
    ctx.SaveChanges();

    return Results.Ok(pesquisador.NomePesquisador + ", cadastrado(a) com sucesso nos registros!");
});

app.MapDelete("/biblioteca/api/pesquisador/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Pesquisador? pesquisador = ctx.TabelaPesquisador.Find(id);

    if (pesquisador is null)
    {
        return Results.NotFound("Pesquisador(a) não encontrado nos registros!");
    }

    ctx.TabelaPesquisador.Remove(pesquisador);
    ctx.SaveChanges();

    return Results.Ok(pesquisador.NomePesquisador + " removido dos registros com sucesso!");
});

app.MapPut("biblioteca/api/pesquisador/atualizar/{id}", ([FromRoute] int id, [FromBody] Pesquisador pesquisadorAtualizado, [FromServices] AppDataContext ctx) =>
{
    Pesquisador? pesquisador = ctx.TabelaPesquisador.Find(id);

    if (pesquisador is null)
    {
        return Results.NotFound("Pesquisador(a) não encontrado para ajuste!");
    }

    pesquisador.NomePesquisador = pesquisadorAtualizado.NomePesquisador;
    pesquisador.DocumentoPesquisador = pesquisadorAtualizado.DocumentoPesquisador;
    pesquisador.EnderecoPesquisador = pesquisadorAtualizado.EnderecoPesquisador;

    ctx.TabelaPesquisador.Update(pesquisador);
    ctx.SaveChanges();

    return Results.Ok(pesquisador.NomePesquisador + ", alterado com sucesso!");
});

//Classe Emprestimo
app.MapGet("/biblioteca/api/emprestimo/buscar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    var emprestimo = ctx.TabelaEmprestimo
                    .Include(e => e.Livro)
                    .Include(e => e.Pesquisador)
                    .Where(e => e.Id == id)
                    .Select(e => new
                    {
                        e.Id,
                        Pesquisador = e.Pesquisador != null ? new
                        {
                            e.Pesquisador.Id,
                            e.Pesquisador.NomePesquisador
                        } : null,
                        Livro = e.Livro != null ? new
                        {
                            e.Livro.Id,
                            e.Livro.NomeLivro
                        } : null,
                        e.DataEmprestimo,
                        e.RetornoEmprestimo,
                    }).FirstOrDefault();

    if (emprestimo is null)
    {
        return Results.NotFound("Livro nao encontrado! :(");
    }

    return Results.Ok(emprestimo);
});

app.MapPost("/biblioteca/api/emprestimo/cadastrar", ([FromBody] Emprestimo emprestimo, [FromServices] AppDataContext ctx) =>
{
    ctx.TabelaEmprestimo.Add(emprestimo);
    ctx.SaveChanges();

    return Results.Ok("Emprestimo de Id " + emprestimo.Id + ", cadastrado com sucesso nos registros!");
});

app.MapDelete("/biblioteca/api/emprestimo/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{
    Emprestimo? emprestimo = ctx.TabelaEmprestimo.Find(id);

    if (emprestimo is null)
    {
        return Results.NotFound("Emprestimo não encontrado nos registros!");
    }

    ctx.TabelaEmprestimo.Remove(emprestimo);
    ctx.SaveChanges();

    return Results.Ok("Emprestimo de Id " + emprestimo.Id + " removido dos registros com sucesso!");
});

app.MapPut("biblioteca/api/emprestimo/atualizar/{id}", ([FromRoute] int id, [FromBody] Emprestimo emprestimoAtualizado, [FromServices] AppDataContext ctx) =>
{
    Emprestimo? emprestimo = ctx.TabelaEmprestimo.Find(id);

    if (emprestimo is null)
    {
        return Results.NotFound("Emprestimo não encontrado para ajuste!");
    }

    emprestimo.Id = emprestimoAtualizado.Id;
    emprestimo.DataEmprestimo = emprestimoAtualizado.DataEmprestimo;

    ctx.TabelaEmprestimo.Update(emprestimo);
    ctx.SaveChanges();

    return Results.Ok("Emprestimo de Id " + emprestimo.Id + ", alterado com sucesso!");
});


app.Run();
