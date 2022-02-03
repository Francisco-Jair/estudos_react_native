import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default function FlexboxV3(props) {
  return (
    <View style={style.flexV3}>
      <Quadrado cor="#963" lado={20} />
      <Quadrado cor="#F00" lado={30} />
      <Quadrado cor="#00F" lado={40} />
      <Quadrado cor="#979" lado={50} />
      <Quadrado cor="#920" lado={60} />
    </View>
  );
}

const style = StyleSheet.create({
  flexV3: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: 350,
    width: "100%",
    backgroundColor: "#000000",
  },
});

// O eixo principal aqui e a coluna por padrao
