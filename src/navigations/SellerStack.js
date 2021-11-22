import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellerHomeScreen from "../screens/seller/SellerHomeScreen";
import SellerOrdersScreen from "../screens/seller/SellerOrdersScreen";
import AddOrderScreen from "../screens/seller/AddOrderScreen";
import SellerCmdDetailsScreen from "../screens/seller/SellerCmdDetailsScreen";

const Stack = createStackNavigator();

const SellerStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SellerHome" component={SellerHomeScreen} />
    <Stack.Screen name="SellerOrders" component={SellerOrdersScreen} />
    <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    <Stack.Screen name="SellerCmdDetails" component={SellerCmdDetailsScreen} />
  </Stack.Navigator>
);

export default SellerStack;
