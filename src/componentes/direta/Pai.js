import { Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react-native";
import estilo from "../../estilos/estilo";

import Filho from "./Filho";

export default function Pai(props) {
  let x = 13;
  let y = 100;
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 4} b={y + 4} />
    </>
  );
}

// O acesso é direto pq o componente pai tem acesso direto(importando) ao componente filho
