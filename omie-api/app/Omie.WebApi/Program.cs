using Omie.WebApi;

var builder = WebApplication.CreateBuilder(args);

var startup = new Startap(builder.Configuration);

startup.ConfigureServices(builder.Services);

var app = builder.Build();

startup.Configure(app, app.Environment);

//app.MapGet("/", () => "Hello World!");//app.MapGet("/", () => "Hello World!");

app.Run();
