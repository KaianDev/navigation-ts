import { createStackNavigator } from "@react-navigation/stack";

import MovieScreen from "../pages/MovieScreen";
import MovieListScreen from "../pages/MovieListScreen";
import { type Movie } from "../@types/Movie";

export type HomeStackParamList = {
  home1: undefined;
  home2: { movie: Movie };
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export default () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="home1"
      component={MovieListScreen}
      options={{ title: "Lista de Filmes" }}
    />
    <HomeStack.Screen
      name="home2"
      component={MovieScreen}
      options={{ title: "Filme" }}
    />
  </HomeStack.Navigator>
);
