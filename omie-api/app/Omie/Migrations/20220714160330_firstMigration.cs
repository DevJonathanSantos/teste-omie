using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Omie.Migrations
{
    public partial class firstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pedido",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeCliente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuantidadeProduto = table.Column<int>(type: "int", nullable: false),
                    ValorProduto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ValorPedido = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pedido", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pedido");
        }
    }
}
