import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, CommandeRow } from "../../components";

const CommandesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\ncommandes"}</Label>
      <View marginVertical={20} />
      <CommandeRow
        onPress={() => navigate("CommandeDetails")}
        status={"Waiting"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => navigate("CommandeDetails")}
        status={"Delivered"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => navigate("CommandeDetails")}
        status={"Delivering"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => navigate("CommandeDetails")}
        status={"Refused"}
        client={"Barbu"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommandesScreen;
