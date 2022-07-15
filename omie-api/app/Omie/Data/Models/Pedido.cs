using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omie.Data.Models
{
    public class Pedido
    {
        public long Id { get; set; }
        public string NomeCliente { get; set; }
        public string NomeProduto { get; set; }
        public int QuantidadeProduto { get; set; }
        public decimal ValorProduto { get; set; }
        public decimal ValorPedido { get; set; }
    }
}
