import React from "react";
import { Text, Platform } from "react-native";
import estilos from "../estilos/estilo";

export default function DiferencaPlataforma() {
  if (Platform.OS === "android") {
    return <Text style={estilos.grande}>android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text style={estilos.grande}>IOS</Text>;
  }
}
