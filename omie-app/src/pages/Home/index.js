import React from "react";
import * as C from "./styles";

const Home = () => {
  const [totalVendas,setTotalVendas]=React.useState(0)

  React.useEffect(() => {
    fetch("https://localhost:44320/api/pedido/buscar_total_vendas")
      .then((T) => T.json())
      .then((i) => setTotalVendas(i));
  }, []);
  
  return (
    <>
      <C.Container>
      <img src="https://www.omie.com.br/images/logo-omie.png"></img>


      <div style={{display:'flex',alignItems: 'center',justifyContent: 'center',top: '30%',position: 'relative'}}>
      <a href="/cadastro">Fazer uma venda</a>
      <h2>Total de vendas: {totalVendas.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
                .replace(".", ",")}</h2>
      </div>
      </C.Container>
    </>
  );
};

export default Home;
