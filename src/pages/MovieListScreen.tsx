import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { type StackScreenProps } from "@react-navigation/stack";

import MovieItem from "../components/MovieItem";
import { getMovies } from "../data/movies";

import { type Movie } from "../@types/Movie";
import { type HomeStackParamList } from "../navigators/HomeStack";

type Props = StackScreenProps<HomeStackParamList, "home1">;

const MovieListScreen = ({ navigation }: Props) => {
  const [movies, setMovies] = useState<Movie[] | false>([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      const movies = await getMovies();
      if (movies) {
        setMovies(movies);
      }
    };

    handleGetMovies();
  }, []);

  const handleGoToHomeTwoButton = (movie: Movie) => {
    navigation.navigate("home2", { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Quantidade de filmes em catálogo: {movies && movies.length}
      </Text>
      {movies && (
        <FlatList
          style={styles.listContainer}
          data={movies}
          renderItem={({ item }) => (
            <MovieItem movie={item} onPress={handleGoToHomeTwoButton} />
          )}
        />
      )}
    </View>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },

  listContainer: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    padding: 10,
  },
});
