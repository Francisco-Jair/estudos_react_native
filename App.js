import { Text, SafeAreaView } from "react-native";
import Primeiro from "./src/componentes/Primeiro";
import Comp, { Comp1, Comp2 } from "./src/componentes/Multi";

export default function App() {
  return (
    <SafeAreaView>
      <Comp />
      <Comp1 />
      <Comp2 />
      {/* <Primeiro /> */}
    </SafeAreaView>
  );
}
