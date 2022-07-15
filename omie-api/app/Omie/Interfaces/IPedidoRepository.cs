using Omie.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omie.Interfaces
{
    public interface IPedidoRepository
    {
        public long BuscarProximoNumeroPedido();
        public decimal BuscarTotalVendas();
        public void CadastrarPedido(Pedido pedido);
    }
}
