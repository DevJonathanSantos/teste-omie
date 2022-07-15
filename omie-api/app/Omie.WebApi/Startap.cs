using Microsoft.EntityFrameworkCore;
using Omie.Data.Context;
using Omie.Interfaces;
using Omie.Repositories;

namespace Omie.WebApi
{

    public class Startap
    {
        public Startap(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<OmieContext>(options =>
            //    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddCors();
            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddTransient<OmieContext>();
            services.AddTransient<IPedidoRepository, PedidoRepository>();
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            //services.AddSwaggerGen();
        }

        public void Configure(WebApplication app, IWebHostEnvironment environment)
        {
            if (app.Environment.IsDevelopment())
            {

            }
            app.UseRouting();
            app.UseCors(option => option.AllowAnyOrigin().AllowAnyHeader() ); ;

            app.UseAuthentication();
            app.UseHttpsRedirection();
            
            app.MapControllers();
        }
    }
}
