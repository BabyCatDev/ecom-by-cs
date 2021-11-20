import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  ProduitRow,
  AddButton
} from "../../components";

const ProduitsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\nproduits"}</Label>
      <View marginVertical={20} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <AddButton onPress={() => navigate("AjouterProduit")}>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ProduitsScreen;
