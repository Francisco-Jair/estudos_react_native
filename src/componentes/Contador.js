import React, { useState } from "react";
import { Text, Button } from "react-native";
import estilo from "../estilos/estilo";

export default function Contador(props) {
  //   let numero = props.inicial;
  const [numero, setNumero] = useState(props.inicial);

  const inc = () => setNumero(numero + 1);
  const dec = () => setNumero(numero - 1);

  return (
    <>
      <Text style={estilo.grande}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
}
