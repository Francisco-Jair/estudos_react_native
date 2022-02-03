import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexboxV1(props) {
  return (
    <View style={style.flexV1}>
      <Quadrado />
      <Quadrado cor="#F00" />
      <Quadrado cor="#00F" />
      <Quadrado cor="#979" />
      <Quadrado cor="#920" />
    </View>
  );
}

const style = StyleSheet.create({
  flexV1: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000000",
  },
});

// O eixo principal aqui e a coluna
