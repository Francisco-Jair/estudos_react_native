import { Text, SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./src/componentes/Primeiro";
import Comp, { Comp1, Comp2 } from "./src/componentes/Multi";
import MinMax from "./src/componentes/MinMax";
import Aleatorio from "./src/componentes/Aleatorio";
import Frag from "./src/componentes/Frag";
import Botao from "./src/componentes/Botao";
import Contador from "./src/componentes/Contador";
import Pai from "./src/componentes/direta/Pai";
import PaiIndireto from "./src/componentes/Indireta/Pai";
import DiferencaPlataforma from "./src/componentes/DiferencaPlataforma";
import RenderazicaoCondicional from "./src/componentes/RenderazicaoCondicional";
import Familia from "./src/componentes/relacao/Familia";
import Membro from "./src/componentes/relacao/Membro";
import UsuarioLogado from "./src/componentes/UsuarioLogado";
import ListaDeProdutos from "./src/componentes/produtos/ListaProdutos";
import DigiteSeuNome from "./src/componentes/DigiteSeuNome";
// import Quadrado from "./src/componentes/layout/Quadrado";
import FlexboxV1 from "./src/componentes/layout/FlexboxV1";

export default function App() {
  return (
    <SafeAreaView style={style.app}>
      <FlexboxV1 />
      {/* <DigiteSeuNome /> */}
      {/* <ListaDeProdutos /> */}
      {/* <UsuarioLogado usuario={{ nome: "Jair", email: "fjair@gmail.com" }} /> */}
      {/* <Familia>
        <Membro nome="Jair" sobrenome="Oliveira" />
        <Membro nome="Shelda" sobrenome="Oliveira" />
      </Familia>
      <Familia>
        <Membro nome="Carlos" sobrenome="Silva" />
        <Membro nome="Paula" sobrenome="Silva" />
      </Familia> */}
      {/* <RenderazicaoCondicional num={2} /> */}
      {/* <DiferencaPlataforma /> */}
      {/* <PaiIndireto /> */}
      {/* <Pai /> */}
      {/* <Contador inicial={0} /> */}
      {/* <Botao /> */}
      {/* <Frag /> */}
      {/* <Aleatorio min={5} max={9} /> */}
      {/* <MinMax min="3" max={5} /> */}
      {/* <Comp /> */}
      {/* <Comp1 /> */}
      {/* <Comp2 /> */}
      {/* <Primeiro /> */}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  app: {
    // backgroundColor: "#A00",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
