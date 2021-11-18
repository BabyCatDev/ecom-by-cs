import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeliveryHomeScreen from "../screens/admin/DeliveryHomeScreen";

const Stack = createStackNavigator();

const MainStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DeliveryHome" component={DeliveryHomeScreen} />
  </Stack.Navigator>
);

export default DeliveryStack;
