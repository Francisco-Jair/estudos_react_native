import React from "react";
import { Text } from "react-native";

// O props é um objeto de leitura, não da para modificar seus valores
export default function Aleatorio({ min, max }) {
  const valorAleatorio = parseInt(Math.random() * (max - min)) + min;

  return <Text>O Valor aleatorio é {valorAleatorio}</Text>;
}
