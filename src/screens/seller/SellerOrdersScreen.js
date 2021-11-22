import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandeRow,
  AddButton
} from "../../components";

const SellerOrdersScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <CommandeRow
        onPress={() => null}
        status={"Waiting"}
        client={"Didier Drogba"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => null}
        status={"Delivered"}
        client={"Didier Drogba"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => null}
        status={"Delivering"}
        client={"Didier Drogba"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <CommandeRow
        onPress={() => null}
        status={"Refused"}
        client={"Didier Drogba"}
        total={"1200 CFA"}
        date={"07-11-2021"}
      />
      <AddButton onPress={() => navigate("AddOrder")}>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SellerOrdersScreen;
