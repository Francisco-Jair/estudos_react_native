import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexboxV1(props) {
  return (
    <View style={style.flexV2}>
      <Quadrado cor="#963" />
      <Quadrado cor="#F00" />
      <Quadrado cor="#00F" />
      <Quadrado cor="#979" />
      <Quadrado cor="#920" />
    </View>
  );
}

const style = StyleSheet.create({
  flexV2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000000",
  },
});

// O eixo principal aqui e a coluna
