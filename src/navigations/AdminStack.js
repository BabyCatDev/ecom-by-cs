import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHomeScreen from "../screens/admin/AdminHomeScreen";
import CommercesScreen from "../screens/admin/CommercesScreen";
import PersonnelsScreen from "../screens/admin/PersonnelsScreen";
import ProduitsScreen from "../screens/admin/ProduitsScreen";
import CommerceProduitsScreen from "../screens/admin/CommerceProduitsScreen";
import StatistiquesScreen from "../screens/admin/StatistiquesScreen";
import AjouterCommerceScreen from "../screens/admin/AjouterCommerceScreen";
import AjouterPersonnelScreen from "../screens/admin/AjouterPersonnelScreen";
import AjouterProduitScreen from "../screens/admin/AjouterProduitScreen";
import PersonnelDetailsScreen from "../screens/admin/PersonnelDetailsScreen";
import UpdatePersonnelScreen from "../screens/admin/UpdatePersonnelScreen";
import UsersStatsScreen from "../screens/admin/UsersStatsScreen";
import UserStatsScreen from "../screens/admin/UserStatsScreen";
import ProductsStatsScreen from "../screens/admin/ProductsStatsScreen";
import ProductStatsScreen from "../screens/admin/ProductStatsScreen";
import AdminDeliveryOrdersScreen from "../screens/admin/AdminDeliveryOrdersScreen";
import CmdDetailsScreen from "../screens/admin/CmdDetailsScreen";
import CommercesStatsScreen from "../screens/admin/CommercesStatsScreen";
import CompanyStatsScreen from "../screens/admin/CompanyStatsScreen";

const Stack = createStackNavigator();

const MainStack = ({}) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
    <Stack.Screen name="Commerces" component={CommercesScreen} />
    <Stack.Screen name="Personnels" component={PersonnelsScreen} />
    <Stack.Screen name="CommerceProduits" component={CommerceProduitsScreen} />
    <Stack.Screen name="Produits" component={ProduitsScreen} />
    <Stack.Screen name="Statistiques" component={StatistiquesScreen} />
    <Stack.Screen name="AjouterCommerce" component={AjouterCommerceScreen} />
    <Stack.Screen name="AjouterPersonnel" component={AjouterPersonnelScreen} />
    <Stack.Screen name="AjouterProduit" component={AjouterProduitScreen} />
    <Stack.Screen name="PersonnelDetails" component={PersonnelDetailsScreen} />
    <Stack.Screen name="UpdatePersonnel" component={UpdatePersonnelScreen} />
    <Stack.Screen name="UsersStats" component={UsersStatsScreen} />
    <Stack.Screen name="UserStats" component={UserStatsScreen} />
    <Stack.Screen name="ProductsStats" component={ProductsStatsScreen} />
    <Stack.Screen name="ProductStats" component={ProductStatsScreen} />
    <Stack.Screen name="CmdDetails" component={CmdDetailsScreen} />
    <Stack.Screen name="CompanyStats" component={CompanyStatsScreen} />
    <Stack.Screen name="CommercesStats" component={CommercesStatsScreen} />
    <Stack.Screen
      name="AdminDeliveryOrders"
      component={AdminDeliveryOrdersScreen}
    />
  </Stack.Navigator>
);

export default MainStack;
