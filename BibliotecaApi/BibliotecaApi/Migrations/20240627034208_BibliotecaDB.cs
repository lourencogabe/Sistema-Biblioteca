using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BibliotecaApi.Migrations
{
    /// <inheritdoc />
    public partial class BibliotecaDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TabelaAutor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeAutor = table.Column<string>(type: "TEXT", nullable: true),
                    NacionalidadeAutor = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TabelaAutor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TabelaPesquisador",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomePesquisador = table.Column<string>(type: "TEXT", nullable: true),
                    DocumentoPesquisador = table.Column<string>(type: "TEXT", nullable: true),
                    EnderecoPesquisador = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TabelaPesquisador", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TabelaLivros",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeLivro = table.Column<string>(type: "TEXT", nullable: true),
                    AutorId = table.Column<int>(type: "INTEGER", nullable: true),
                    SinopseLivro = table.Column<string>(type: "TEXT", nullable: true),
                    DataPublicacaoLivro = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TabelaLivros", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TabelaLivros_TabelaAutor_AutorId",
                        column: x => x.AutorId,
                        principalTable: "TabelaAutor",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TabelaEmprestimo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DataEmprestimo = table.Column<DateTime>(type: "TEXT", nullable: true),
                    RetornoEmprestimo = table.Column<DateTime>(type: "TEXT", nullable: true),
                    PesquisadorId = table.Column<int>(type: "INTEGER", nullable: true),
                    LivroId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TabelaEmprestimo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TabelaEmprestimo_TabelaLivros_LivroId",
                        column: x => x.LivroId,
                        principalTable: "TabelaLivros",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TabelaEmprestimo_TabelaPesquisador_PesquisadorId",
                        column: x => x.PesquisadorId,
                        principalTable: "TabelaPesquisador",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_TabelaEmprestimo_LivroId",
                table: "TabelaEmprestimo",
                column: "LivroId");

            migrationBuilder.CreateIndex(
                name: "IX_TabelaEmprestimo_PesquisadorId",
                table: "TabelaEmprestimo",
                column: "PesquisadorId");

            migrationBuilder.CreateIndex(
                name: "IX_TabelaLivros_AutorId",
                table: "TabelaLivros",
                column: "AutorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TabelaEmprestimo");

            migrationBuilder.DropTable(
                name: "TabelaLivros");

            migrationBuilder.DropTable(
                name: "TabelaPesquisador");

            migrationBuilder.DropTable(
                name: "TabelaAutor");
        }
    }
}
