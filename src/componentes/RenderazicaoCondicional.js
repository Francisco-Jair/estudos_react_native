import React from "react";
import { Text } from "react-native";

export default function RenderazicaoCondicional(props) {
  if ((props.num || 0) % 2 === 0) {
    return <Text>PAR</Text>;
  } else {
    return <Text>IMPAR</Text>;
  }
}

// Pode usar o operadore ternario tambem
