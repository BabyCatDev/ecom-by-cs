import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellerHomeScreen from "../screens/seller/SellerHomeScreen";
import SellerOrdersScreen from "../screens/seller/SellerOrdersScreen";
import AddOrderScreen from "../screens/seller/AddOrderScreen";

const Stack = createStackNavigator();

const SellerStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SellerHome" component={SellerHomeScreen} />
    <Stack.Screen name="SellerOrders" component={SellerOrdersScreen} />
    <Stack.Screen name="AddOrder" component={AddOrderScreen} />
  </Stack.Navigator>
);

export default SellerStack;
