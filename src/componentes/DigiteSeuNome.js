import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import estilo from "../estilos/estilo";

export default function DigiteSeuNome(props) {
  const [nome, setNome] = useState("teste");
  //   let nome = "teste";

  return (
    <>
      <View>
        <Text>{nome}</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(nome) => setNome(nome)}
        />
      </View>
    </>
  );
}
