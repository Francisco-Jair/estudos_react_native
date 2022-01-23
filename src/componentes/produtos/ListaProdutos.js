import React from "react";
import { Text } from "react-native";
import estilo from "../../estilos/estilo";

import produtos from "./produtos";

export default function ListaDeProdutos(props) {
  return (
    <>
      <Text style={estilo.grande}>Lista de Produtos</Text>
      {produtos.map((p) => {
        return (
          <Text key={p.id}>
            {p.id} {p.nome}
          </Text>
        );
      })}
    </>
  );
}
