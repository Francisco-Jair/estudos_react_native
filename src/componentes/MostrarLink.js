import React, { useState } from "react";
import { View, StyleSheet, Linking, Text } from "react-native";
// import { WebView } from "react-native-webview";
// import * as WebBrowser from "expo-web-browser";

export default function MostrarLink() {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          Linking.openURL("https://estouchegando.cobli.co/transportta/?QH23HC");
        }}
      >
        LInk da Localizaçõ
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
