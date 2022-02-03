import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexboxV4(props) {
  return (
    <View style={style.flexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
}

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: "#000000",
  },
  V0: {
    backgroundColor: "#36c9a7",
    height: 300,
  },
  V1: {
    backgroundColor: "#ff801a",
    flexGrow: 10,
  },
  V2: {
    backgroundColor: "#dd22c1",
    flexGrow: 1,
  },
});

// O eixo principal aqui e a coluna por padrao
// Pega o espaço sobrando e divide as partes