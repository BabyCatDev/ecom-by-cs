import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, CommandeRow } from "../../components";

const CommandesScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ paddingHorizontal: 15 }}>
      <TopBar />
      <Label>{"Liste des\ncommandes"}</Label>
      <View marginVertical={20} />
      <CommandeRow
        status={"Status: Preparation"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        status={"Status: Preparation"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        status={"Status: Preparation"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommandesScreen;
