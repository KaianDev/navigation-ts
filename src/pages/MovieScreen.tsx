import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { HomeStackParamList } from "../navigators/HomeStack";

type Props = StackScreenProps<HomeStackParamList, "home2">;

const MovieScreen = ({ route }: Props) => {
  let movie = route.params?.movie;

  return (
    <View style={styles.container}>
      {movie && (
        <>
          <Text style={styles.title}>{movie.titulo}</Text>
          <Image
            source={{ uri: movie.avatar }}
            style={styles.avatar}
            resizeMode="contain"
          />
        </>
      )}
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
