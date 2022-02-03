import React from "react";
import { Text, TextInput } from "react-native";
import estilo from "../../estilos/estilo";

export default class Mega extends React.Component {
  // state = {
  //     qNumero : this.props.qNumero
  // }

  constructor(props) {
    super(props);
    this.state = {
      qNumero: this.props.qNumero + 100,
    };
  }

  alterarEstado(quant){
      this.setState({qNumero: quant})
  }

  render() {
    return (
      <>
        <Text style={estilo.grande}>
          Gerador de Mega-Sena {this.state.qNumero}
        </Text>
        <TextInput placeholder="Qtde de Números" value={this.state.qNumero} onChangeText={this.alterarEstado}/>
      </>
    );
  }
}
