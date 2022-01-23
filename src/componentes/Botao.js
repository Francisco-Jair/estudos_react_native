import React from "react";
import { Button } from "react-native";

export default function Botao() {
  function executar() {
    console.warn("Executou");
  }

  return <Button title="Executar" onPress={executar} />;
}
