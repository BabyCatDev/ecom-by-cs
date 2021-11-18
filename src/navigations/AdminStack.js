import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";

const Stack = createStackNavigator();

const MainStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
  </Stack.Navigator>
);

export default MainStack;
