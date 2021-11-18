import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, ProduitRow } from "../../components";

const ProduitsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ paddingHorizontal: 15 }}>
      <TopBar />
      <Label>{"Liste des\npersonnels"}</Label>
      <View marginVertical={20} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ProduitsScreen;
