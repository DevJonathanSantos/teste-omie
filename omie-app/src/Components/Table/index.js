import React from "react";
import * as C from "./styles";

const Table = ({ array }) => {
  return (
    <>
      <div style={{overflowY: 'auto',maxHeight: '170px',width: 'inherit'}}>
        <C.Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor unitario</th>
              <th>Valor total</th>
            </tr>
          </thead>

          <tbody>
            {array != null
              ? array.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nomeProduto}</td>
                    <td>{item.qtdProduto}</td>
                    <td>{item.valorProduto}</td>
                    <td>
                      {(
                        item.valorProduto * item.qtdProduto
                      ).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </C.Table>
      </div>
    </>
  );
};

export default Table;
