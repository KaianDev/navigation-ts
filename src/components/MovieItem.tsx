import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import type { Movie } from "../@types/Movie";

type MovieItemProps = {
  movie: Movie;
  onPress: (movie: Movie) => void;
};

const MovieItem = ({ movie, onPress }: MovieItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movie.avatar }}
        resizeMode="contain"
        style={styles.avatar}
      />
      <View style={{ justifyContent: "space-between" }}>
        <Text style={styles.title}>{movie.titulo}</Text>
        <Button title="Ver mais" onPress={() => onPress(movie)} />
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 5,
  },

  avatar: {
    width: 150,
    height: 150,
    marginLeft: -25,
  },

  title: {
    fontSize: 16,
    width: 200,
    textAlign: "center",
  },
});
