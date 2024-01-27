import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Aplicativo tem como objetivo testar as funcionalidades do
        React-Navigation
      </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
  },
});
