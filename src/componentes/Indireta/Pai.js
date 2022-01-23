import React, { useState } from "react";
import { Text } from "react-native";

import Filho from "./Filho";

export default function Pai(props) {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text>{num}</Text>
      <Filho min={1} max={10} fun={exibirValor} />
    </>
  );
}
