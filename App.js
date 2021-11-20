import React from "react";
import { Provider as StoreProvider } from "react-redux";
import Navigation from "./src/navigations/Navigation";
import { createStore, applyMiddleware } from "redux";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import reducers from "./src/reducers";
import { useFonts } from "expo-font";
import thunk from "redux-thunk";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
  });
  const store = createStore(reducers, applyMiddleware(thunk));

  if (!fontsLoaded) return <AppLoading />;
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
}
