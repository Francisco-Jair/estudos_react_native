import React from "react";
import { Text } from "react-native";
import estilo from "../estilos/estilo";

export default function MinMax(props) {
//   console.warn(props);
// os props é um objeto com todas as propriedades passadas para o componente
  return (
    <Text style={estilo.grande}>
      O valor {props.max} é maior que o valor {props.min}
    </Text>
  );
}
