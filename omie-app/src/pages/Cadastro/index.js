import React from "react";
import * as C from "./styles";
import Input from "../../Components/Input"
import Form from "../../Components/Form"
import Table from "../../Components/Table";
const Cadastro = () => {

  const peditoVazio = {
    nomeCliente: "",
    nomeProduto: "",
    qtdProduto:  "",
    valorProduto:  "",
    numeroPedido:0
  };

  const [pedito, setPedido] = React.useState(peditoVazio);
  const [peditoLista, setPedidoLista] = React.useState([]);
  return (
    <>
      <C.Container>
        <img src="https://www.omie.com.br/images/logo-omie.png"></img>

        <C.NumeroPedido>Numero do pedido: {pedito.numeroPedido}</C.NumeroPedido>
       <Form pedito={pedito} setPedido={setPedido} peditoLista={peditoLista} setPedidoLista={setPedidoLista}/>
       {/* <Table/> */}
      </C.Container>
    </>
  );
};

export default Cadastro;
