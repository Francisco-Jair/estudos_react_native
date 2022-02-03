import React from "react";
import { Text } from "react-native";
import estilo from '../../estilos/estilo'

export default class Mega extends React.Component{
    render(){
        return (<Text style={estilo.grande}>Gerador de Mega-Sena</Text>)
    }
}