import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";
import CommercesScreen from "../screens/admin/CommercesScreen";
import PersonnelsScreen from "../screens/admin/PersonnelsScreen";
import ProduitsScreen from "../screens/admin/ProduitsScreen";
import CommandesScreen from "../screens/admin/CommandesScreen";
import CommerceProduitsScreen from "../screens/admin/CommerceProduitsScreen";

const Stack = createStackNavigator();

const MainStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
    <Stack.Screen name="Commerces" component={CommercesScreen} />
    <Stack.Screen name="Personnels" component={PersonnelsScreen} />
    <Stack.Screen name="CommerceProduits" component={CommerceProduitsScreen} />
    <Stack.Screen name="Commandes" component={CommandesScreen} />
    <Stack.Screen name="Produits" component={ProduitsScreen} />
  </Stack.Navigator>
);

export default MainStack;
