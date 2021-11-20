import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  PersonnelRow,
  AddButton
} from "../../components";

const PersonnelsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\npersonnels"}</Label>
      <View marginVertical={20} />
      <PersonnelRow
        onPress={() => navigate("PersonnelDetails")}
        name={"Cheick Bamba"}
        type={"Administrateur"}
      />
      <PersonnelRow
        onPress={() => navigate("PersonnelDetails")}
        name={"Cristiano Ronaldo"}
        type={"Commercial"}
      />
      <PersonnelRow
        onPress={() => navigate("PersonnelDetails")}
        name={"Didier Drogba"}
        type={"Delivery"}
      />
      <AddButton onPress={() => navigate("AjouterPersonnel")}>
        Ajouter
      </AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default PersonnelsScreen;
