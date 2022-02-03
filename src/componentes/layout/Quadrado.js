import React from "react";
import { View, StyleSheet } from "react-native";

export default function Quadrado(props) {
  const lado = 50;

  return (
    <View
      style={{
        height: props.lado || lado,
        width: props.lado || lado,
        backgroundColor: props.cor || "#000",
      }}
    ></View>
  );
}

const style = StyleSheet.create({});
