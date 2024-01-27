import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../@types/Movie";
import { getMovies } from "../data/movies";
import { FlatList } from "react-native-gesture-handler";
import MovieItem from "../components/MovieItem";

const MovieListScreen = () => {
  const [movies, setMovies] = useState<Movie[] | false>([]);
  const navigation = useNavigation();

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
