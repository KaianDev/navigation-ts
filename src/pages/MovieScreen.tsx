import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const MovieScreen = () => {
  const route = useRoute();
  let movie = "";

  if (route.params) {
    movie = route.params.movie;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.titulo}</Text>
      <Image
        source={{ uri: movie.avatar }}
        style={styles.avatar}
        resizeMode="contain"
      />
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 400,
    height: 500,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: 300,
  },
});
