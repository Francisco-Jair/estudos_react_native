import { Text, SafeAreaView, StyleSheet } from "react-native";
import Primeiro from "./src/componentes/Primeiro";
import Comp, { Comp1, Comp2 } from "./src/componentes/Multi";

export default function App() {
  return (
    <SafeAreaView style={style.app}>
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  app: {
    backgroundColor: "#A00",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
