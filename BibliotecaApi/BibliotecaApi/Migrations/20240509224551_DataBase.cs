using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BibliotecaApi.Migrations
{
    /// <inheritdoc />
    public partial class DataBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TabelaLivros",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeLivro = table.Column<string>(type: "TEXT", nullable: true),
                    AtorLivro = table.Column<string>(type: "TEXT", nullable: true),
                    SinopseLivro = table.Column<string>(type: "TEXT", nullable: true),
                    DataPublicacaoLivro = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TabelaLivros", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TabelaLivros");
        }
    }
}
