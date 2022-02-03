import React from "react";
import { Text, TextInput } from "react-native";
import estilo from "../../estilos/estilo";

export default class Mega extends React.Component {
  // state = {
  //     qNumero : this.props.qNumero
  // }

  constructor(props) {
    super(props);

    // Forçando o this a referenciar o objeto
    // this.alterarEstado = this.alterarEstado.bind(this)
    //outra solucação e usar arrow Functions tanto o metodo ou na chamanda como esta

    this.state = {
      qNumero: this.props.qNumero + 100,
    };
  }

  alterarEstado(quant) {
    this.setState({ qNumero: quant });
  }

  render() {
    return (
      <>
        <Text style={estilo.grande}>
          Gerador de Mega-Sena {this.state.qNumero}
        </Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtde de Números"
          value={this.state.qNumero}
          //   onChangeText={this.alterarEstado}
          onChangeText={(quan) => this.alterarEstado(quan)}
        />
      </>
    );
  }
}
