import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import AboutScreen from "../pages/AboutScreen";

const MainTab = createBottomTabNavigator();

export default () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        if (route.name === "Home") {
          return <Ionicons name="home" size={24} color="black" />;
        } else {
          return <Ionicons name="information-circle" size={24} color="black" />;
        }
      },
    })}>
    <MainTab.Screen
      name="Home"
      component={HomeStack}
      options={{ headerShown: false }}
    />
    <MainTab.Screen
      name="About"
      component={AboutScreen}
      options={{ headerTitleAlign: "center" }}
    />
  </MainTab.Navigator>
);
