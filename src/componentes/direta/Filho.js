import { Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react-native";
import estilo from "../../estilos/estilo";

export default function Filho(props) {
  return (
    <>
      <Text style={estilo.grande}>{props.a}</Text>
      <Text style={estilo.grande}>{props.b}</Text>
    </>
  );
}
