import React from "react";
import { Text } from "react-native";
import estilo from "../estilos/estilo";
import IF from "./IF";

export default function UsuarioLogado({ usuario = {} }) {
  return (
    <>
      <IF teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.grande}>
          {usuario.nome} - {usuario.email}
        </Text>
      </IF>
    </>
  );
}
