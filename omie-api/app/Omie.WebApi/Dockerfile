#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["app/Omie.WebApi/Omie.WebApi.csproj", "app/Omie.WebApi/"]
RUN dotnet restore "app/Omie.WebApi/Omie.WebApi.csproj"
COPY . .
WORKDIR "/src/app/Omie.WebApi"
RUN dotnet build "Omie.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Omie.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Omie.WebApi.dll"]