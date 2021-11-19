import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, ProduitRow } from "../../components";

const CommerceProduitsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { name } = route.params;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{name}</Label>
      <View marginVertical={20} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
      <ProduitRow name={"300 SL Gull-Wing"} prix={"1200 CFA"} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommerceProduitsScreen;
