import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellerHomeScreen from "../screens/seller/SellerHomeScreen";

const Stack = createStackNavigator();

const SellerStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SellerHome" component={SellerHomeScreen} />
  </Stack.Navigator>
);

export default SellerStack;
