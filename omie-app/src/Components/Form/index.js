import React, { useEffect } from "react";
import * as C from "./styles";
import Input from "../Input";
import Button from "../Button";
import Table from "../Table";

const Form = ({ pedito, setPedido, peditoLista, setPedidoLista }) => {
  const peditoVazio = {
    nomeCliente: "",
    nomeProduto: "",
    qtdProduto: "",
    valorProduto: "",
    numeroPedido: 0,
  };

  React.useEffect(() => {
    fetch("https://localhost:44320/api/pedido/buscar_proximo_numero")
      .then((T) => T.json())
      .then((i) => setPedido({ ...pedito, ["numeroPedido"]: i }));
  }, []);

  function handleChange({ target }) {
    const { id, value } = target;
    setPedido({ ...pedito, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
      setPedidoLista([...peditoLista, pedito]);
    peditoVazio.nomeCliente = pedito.nomeCliente;
    peditoVazio.numeroPedido = pedito.numeroPedido;
    setPedido(peditoVazio);
  }

  function handleCadastrar() {
    fetch("https://localhost:44320/api/pedido/cadastrar", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify(
        peditoLista.map((item) => {
          return {
            NomeCliente: item.nomeCliente,
            NomeProduto: item.nomeProduto,
            QuantidadeProduto: item.qtdProduto,
            ValorProduto: parseFloat(item.valorProduto),
            ValorPedido: parseFloat(item.valorProduto * item.qtdProduto),
          };
        })
      ),
    })
      .then(function(res) {
        window.location.href = "http://localhost:3000/";

        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  }

  return (
    <>
      <C.Form onSubmit={handleSubmit}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            borderBottom: "none",
          }}
        >
          <h2>Cliente</h2>
          <Input
            label="Nome"
            id="nomeCliente"
            type="text"
            placeholder=" João..."
            onChange={handleChange}
            // value={pedito.nomeCliente}
          />
        </div>

        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            borderTop: "none",
          }}
        >
          <h2>Produto</h2>

          <Input
            label="Nome"
            id="nomeProduto"
            type="text"
            onChange={handleChange}
            value={pedito.nomeProduto}
          />
          <Input
            label="Quantidade"
            id="qtdProduto"
            type="text"
            width="50px"
            onChange={handleChange}
            value={pedito.qtdProduto}
          />
          <Input
            label="Valor"
            id="valorProduto"
            type="text"
            width="90px"
            onChange={handleChange}
            value={pedito.valorProduto}
          />

          <div
            style={{
              float: "right",
              position: "relative",
              bottom: "180px",
              color: "#fff",
            }}
          >
            <span>Valor total do item</span>
            <br></br>
          </div>

          <div
            style={{
              float: "right",
              position: "relative",
              bottom: "160px",
              color: "#fff",
              left: "135px",
            }}
          >
            <span>
              {(pedito.qtdProduto * pedito.valorProduto)
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
                .replace(".", ",")}
            </span>
          </div>
        </div>

        <Button style={{ right: "500px" }}>Incluir</Button>
      </C.Form>
      <Table array={peditoLista} />

      <Button onClick={handleCadastrar}>Cadastrar</Button>

      <Button
        onClick={() => {
          window.location.href = "http://localhost:3000/";
        }}
      >
        Cancelar
      </Button>
    </>
  );
};

export default Form;
