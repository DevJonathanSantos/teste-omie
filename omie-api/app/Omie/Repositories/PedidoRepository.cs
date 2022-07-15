using Omie.Data.Context;
using Omie.Data.Models;
using Omie.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omie.Repositories
{
    public class PedidoRepository : IPedidoRepository
    {
        private readonly OmieContext _context;
        public PedidoRepository(OmieContext context)
        {
            _context = context;
        }
        public long BuscarProximoNumeroPedido()
        {
            var pedido = _context.Pedido.OrderByDescending(o => o.Id).FirstOrDefault();

            if(pedido != null)
                return pedido.Id+1;
            else return 1;
        }

        public decimal BuscarTotalVendas()
        {
            var totalVendas = _context.Pedido.Select(o => o.ValorPedido).Sum();

            return totalVendas;
        }

        public void CadastrarPedido(Pedido pedido)
        {
            _context.Pedido.Add(pedido);
            _context.SaveChanges();
        }
    }
}
