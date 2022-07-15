using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Omie.Data.Context;
using Omie.Interfaces;
using Omie.WebApi.ViewModels;

namespace Omie.WebApi.Controllers
{
    [Route("api/pedido")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly IPedidoRepository _pedidoRepository;
        public PedidoController(IPedidoRepository pedidoRepository)
        {
            _pedidoRepository = pedidoRepository;
        }

        [HttpGet("buscar_proximo_numero")]
        public async Task<IActionResult> BuscarProximoNumeroPedido()
        {
            return Ok(_pedidoRepository.BuscarProximoNumeroPedido());
        }

        [HttpGet("buscar_total_vendas")]
        public async Task<IActionResult> BuscarTotalVendas()
        {
            return Ok(_pedidoRepository.BuscarTotalVendas());
        }

        [HttpPost("cadastrar")]
        public async Task<IActionResult> CadastrarPedido(List<PedidoViewModel> data)
        {
            foreach(var item in data)
            {
                _pedidoRepository.CadastrarPedido(new Data.Models.Pedido()
                {
                    NomeCliente = item.NomeCliente,
                    NomeProduto = item.NomeProduto,
                    QuantidadeProduto = item.QuantidadeProduto,
                    ValorProduto = item.ValorProduto,
                    ValorPedido = item.ValorPedido
                });
            }

            return Ok();
        }
    }
}
