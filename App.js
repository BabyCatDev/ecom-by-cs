import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import Navigation from "./src/navigations/Navigation";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
  });
  if (!fontsLoaded) return <AppLoading />;
  return <Navigation />;
}
