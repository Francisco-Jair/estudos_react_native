import React from "react";
import { Text } from "react-native";
import estilo from "../estilos/estilo";

export default function Comp() {
  return <Text style={estilo.grande}>Comp #Oficial</Text>;
}

function Comp1() {
  return <Text style={estilo.grande}>Comp #1</Text>;
}

function Comp2() {
  return <Text style={estilo.grande}>Comp #2</Text>;
}

function Comp3() {
  return <Text style={estilo.grande}>Comp #3</Text>;
}

export { Comp1, Comp2 };
