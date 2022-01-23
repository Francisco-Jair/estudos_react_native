import React from "react";
import { Text } from "react-native";

export default function Aleatorio({ min, max }) {
  const valorAleatorio = parseInt(Math.random() * (max - min)) + min;

  return <Text>O Valor aleatorio é {valorAleatorio}</Text>;
}
