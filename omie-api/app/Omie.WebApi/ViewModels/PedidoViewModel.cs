namespace Omie.WebApi.ViewModels
{
    public class PedidoViewModel
    {
        public string NomeCliente { get; set; } = string.Empty;
        public string NomeProduto { get; set; }= string.Empty;
        public int QuantidadeProduto { get; set; }
        public decimal ValorProduto { get; set; }
        public decimal ValorPedido { get; set; }
    }
}
