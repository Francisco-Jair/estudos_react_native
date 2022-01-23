import React from "react";
import { Button } from "react-native";
// import estilo from "../../estilos/estilo";

export default function Filho(props) {
  const valorAle = (min, max) => {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  };

  return (
    <>
      <Button
        title="Executar"
        onPress={function () {
          const n = valorAle(props.min, props.max);
          props.fun(n);
        }}
      />
    </>
  );
}

// O acesso é indireto
