import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";
import CommercesScreen from "../screens/admin/CommercesScreen";
import PersonnelsScreen from "../screens/admin/PersonnelsScreen";
import ProduitsScreen from "../screens/admin/ProduitsScreen";
import CommandesScreen from "../screens/admin/CommandesScreen";
import CommerceProduitsScreen from "../screens/admin/CommerceProduitsScreen";
import CommandeDetailsScreen from "../screens/admin/CommandeDetailsScreen";
import StatistiquesScreen from "../screens/admin/StatistiquesScreen";
import AjouterCommerceScreen from "../screens/admin/AjouterCommerceScreen";
import AjouterPersonnelScreen from "../screens/admin/AjouterPersonnelScreen";
import AjouterProduitScreen from "../screens/admin/AjouterProduitScreen";
import PersonnelDetailsScreen from "../screens/admin/PersonnelDetailsScreen";
import UpdatePersonnelScreen from "../screens/admin/UpdatePersonnelScreen";
import UsersStatsScreen from "../screens/admin/UsersStatsScreen";
import UserStatsScreen from "../screens/admin/UserStatsScreen";

const Stack = createStackNavigator();

const MainStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
    <Stack.Screen name="Commerces" component={CommercesScreen} />
    <Stack.Screen name="Personnels" component={PersonnelsScreen} />
    <Stack.Screen name="CommerceProduits" component={CommerceProduitsScreen} />
    <Stack.Screen name="Commandes" component={CommandesScreen} />
    <Stack.Screen name="Produits" component={ProduitsScreen} />
    <Stack.Screen name="Statistiques" component={StatistiquesScreen} />
    <Stack.Screen name="CommandeDetails" component={CommandeDetailsScreen} />
    <Stack.Screen name="AjouterCommerce" component={AjouterCommerceScreen} />
    <Stack.Screen name="AjouterPersonnel" component={AjouterPersonnelScreen} />
    <Stack.Screen name="AjouterProduit" component={AjouterProduitScreen} />
    <Stack.Screen name="PersonnelDetails" component={PersonnelDetailsScreen} />
    <Stack.Screen name="UpdatePersonnel" component={UpdatePersonnelScreen} />
    <Stack.Screen name="UsersStats" component={UsersStatsScreen} />
    <Stack.Screen name="UserStats" component={UserStatsScreen} />
  </Stack.Navigator>
);

export default MainStack;
