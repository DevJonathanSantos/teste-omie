using Microsoft.EntityFrameworkCore;
using Omie.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Omie.Data.Context
{
    public class OmieContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Omie;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        public DbSet<Pedido> Pedido { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pedido>().ToTable("Pedido");
        }
    }
}
