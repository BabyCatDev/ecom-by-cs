import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeliveryHomeScreen from "../screens/delivery/DeliveryHomeScreen";
import DeliveryOrdersScreen from "../screens/delivery/DeliveryOrdersScreen";
import DeliveryCmdDetailsScreen from "../screens/delivery/DeliveryCmdDetailsScreen";

const Stack = createStackNavigator();

const DeliveryStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DeliveryHome" component={DeliveryHomeScreen} />
    <Stack.Screen name="DeliveryOrders" component={DeliveryOrdersScreen} />
    <Stack.Screen
      name="DeliveryCmdDetails"
      component={DeliveryCmdDetailsScreen}
    />
  </Stack.Navigator>
);

export default DeliveryStack;
