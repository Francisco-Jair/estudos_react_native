import { Text, SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./src/componentes/Primeiro";
import Comp, { Comp1, Comp2 } from "./src/componentes/Multi";
import MinMax from "./src/componentes/MinMax";
import Aleatorio from "./src/componentes/Aleatorio";

export default function App() {
  return (
    <SafeAreaView style={style.app}>
      <Aleatorio min={5} max={9} />
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
