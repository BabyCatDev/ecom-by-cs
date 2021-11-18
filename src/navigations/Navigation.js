import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as RootNavigation from "./RootNavigation";
import AuthStack from "./AuthStack";
import AdminStack from "./AdminStack";
import MyTheme from "../Colors";

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme} ref={RootNavigation.navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
