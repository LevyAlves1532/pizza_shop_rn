// LIBs
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

// ROUTEs
import { Routes } from "./src/core/Routes";

export default function App() {
  const [ fontsLoaded, fontError ] = useFonts({
    "Open_Sans_Light": require("./src/assets/fonts/OpenSans-Light.ttf"),
    "Open_Sans_Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "Open_Sans_Medium": require("./src/assets/fonts/OpenSans-Medium.ttf"),
    "Open_Sans_SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
    "Open_Sans_Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
