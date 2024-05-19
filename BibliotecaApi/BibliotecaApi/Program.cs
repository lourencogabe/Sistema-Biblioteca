using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

Livro livro = new Livro();

//Classe Livro

app.MapGet("/biblioteca/api/livro/buscar/{id}", ([FromRoute] int id,[FromServices] AppDataContext ctx) => {
    Livro? livro = ctx.TabelaLivros.FirstOrDefault(x=>x.Id == id);
    
    if(livro is null){
        return Results.NotFound("Livro nao encontrado! :(");
    }

    return Results.Ok(livro);
});

app.MapGet("/biblioteca/api/livro/listar", ([FromServices] AppDataContext ctx) => {
    
    if(ctx.TabelaLivros is null){
        return Results.NotFound("Acervo vázio! :(");
    }

    return Results.Ok(ctx.TabelaLivros.ToList());
});

app.MapPost("/biblioteca/api/livro/cadastrar", ([FromBody] Livro livro, [FromServices] AppDataContext ctx) => {
    ctx.TabelaLivros.Add(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro cadastrado com sucesso! " + livro.NomeLivro + " :)");
});

app.MapDelete("/biblioteca/api/livro/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) => {
    Livro? livro = ctx.TabelaLivros.Find(id);

    if(livro is null){
        return Results.NotFound("Livro não encontrado no acervo! :(");
    }

    ctx.TabelaLivros.Remove(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro removido com sucesso! Nome: " + livro.NomeLivro + " :X");
});

app.MapPut("/biblioteca/api/livro/atualizar/{id}", ([FromRoute] int id, [FromBody] Livro livroAtualizado, [FromServices] AppDataContext ctx) => {
    Livro? livro = ctx.TabelaLivros.Find(id);

    if(livro is null){
        return Results.NotFound();
    }

    livro.NomeLivro = livroAtualizado.NomeLivro;
    livro.AtorLivro = livroAtualizado.AtorLivro;
    livro.SinopseLivro = livroAtualizado.SinopseLivro;
    livro.DataPublicacaoLivro = livroAtualizado.DataPublicacaoLivro;

    ctx.TabelaLivros.Update(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro alterado com sucesso! Nome: " + livro.NomeLivro + " :)");
});

//Classe Autor

app.MapGet("/biblioteca/api/autor/listar", ([FromServices] AppDataContext ctx) => {
    
    if(ctx.TabelaLivros is null){
        return Results.NotFound("Acervo vázio! :(");
    }

    return Results.Ok(ctx.TabelaLivros.ToList());
});

app.MapPost("/biblioteca/api/autor/cadastrar/", ([FromBody] Livro livro, [FromServices] AppDataContext ctx) => {
    ctx.TabelaLivros.Add(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro cadastrado com sucesso! " + livro.NomeLivro + " :)");
});

app.MapDelete("/biblioteca/api/autor/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) => {
    Livro? livro = ctx.TabelaLivros.Find(id);

    if(livro is null){
        return Results.NotFound("Livro não encontrado no acervo! :(");
    }

    ctx.TabelaLivros.Remove(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro removido com sucesso! Nome: " + livro.NomeLivro + " :X");
});

app.MapPut("biblioteca/api/autor/atualizar/{id}", ([FromRoute] int id, [FromBody] Livro livroAtualizado, [FromServices] AppDataContext ctx) => {
    Livro? livro = ctx.TabelaLivros.Find(id);

    if(livro is null){
        return Results.NotFound();
    }

    livro.NomeLivro = livroAtualizado.NomeLivro;
    livro.AtorLivro = livroAtualizado.AtorLivro;
    livro.SinopseLivro = livroAtualizado.SinopseLivro;
    livro.DataPublicacaoLivro = livroAtualizado.DataPublicacaoLivro;

    ctx.TabelaLivros.Update(livro);
    ctx.SaveChanges();

    return Results.Ok("Livro alterado com sucesso! Nome: " + livro.NomeLivro + " :)");
});

//Classe Pesquisador
//Classe Emprestimo

app.Run();
