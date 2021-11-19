import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, PersonnelRow } from "../../components";

const PersonnelsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\npersonnels"}</Label>
      <View marginVertical={20} />
      <PersonnelRow name={"Cheikh Bamba"} type={"Administrateur"} />
      <PersonnelRow name={"Cristiano Ronaldo"} type={"Commercial"} />
      <PersonnelRow name={"Didier Drogba"} type={"Delivery"} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default PersonnelsScreen;
