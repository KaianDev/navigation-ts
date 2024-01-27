import { createStackNavigator } from "@react-navigation/stack";

import MovieScreen from "../pages/MovieScreen";
import MovieListScreen from "../pages/MovieListScreen";

const HomeStack = createStackNavigator();

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
