import React from "react";
import { Text } from "react-native";
import estilo from "../../estilos/estilo";

export default function Membro(props) {
  return (
    <>
      <Text style={estilo.grande}>
        {props.nome} {props.sobrenome}
      </Text>
    </>
  );
}
