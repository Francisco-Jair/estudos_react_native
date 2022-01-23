import React from "react";
import { Text, FlatList } from "react-native";
import estilo from "../../estilos/estilo";

import produtos from "./produtos";

export default function ListaDeProdutos(props) {
  return (
    <>
      <Text style={estilo.grande}>Lista de Produtos</Text>
      <FlatList
        keyExtractor={(i) => String(i.id)}
        data={produtos}
        renderItem={({ item: p }) => {
          return (
            <Text>
              {p.id} {p.nome}
            </Text>
          );
        }}
      />
    </>
  );
}
