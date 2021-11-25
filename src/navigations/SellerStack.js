import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellerHomeScreen from "../screens/seller/SellerHomeScreen";
import SellerOrdersScreen from "../screens/seller/SellerOrdersScreen";
import AddOrderScreen from "../screens/seller/AddOrderScreen";
import SellerCmdDetailsScreen from "../screens/seller/SellerCmdDetailsScreen";
import SellerStatsScreen from "../screens/seller/SellerStatsScreen";
import SellerReportsScreen from "../screens/seller/SellerReportsScreen";

const Stack = createStackNavigator();

const SellerStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SellerHome" component={SellerHomeScreen} />
    <Stack.Screen name="SellerOrders" component={SellerOrdersScreen} />
    <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    <Stack.Screen name="SellerCmdDetails" component={SellerCmdDetailsScreen} />
    <Stack.Screen name="SellerStats" component={SellerStatsScreen} />
    <Stack.Screen name="SellerReports" component={SellerReportsScreen} />
  </Stack.Navigator>
);

export default SellerStack;
