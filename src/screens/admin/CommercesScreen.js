import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommerceRow,
  Button
} from "../../components";

const CommercesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  return (
    <Container containerstyle={{ paddingHorizontal: 15 }}>
      <TopBar />
      <Label>{"Liste des\ncommerces"}</Label>
      <View marginVertical={20} />
      <CommerceRow
        onPress={() => navigate("CommerceProduits", { name: "Coca cola" })}
      >
        Coca cola
      </CommerceRow>
      <CommerceRow
        onPress={() => navigate("CommerceProduits", { name: "Fanta" })}
      >
        Fanta
      </CommerceRow>
      <CommerceRow
        onPress={() => navigate("CommerceProduits", { name: "Nike" })}
      >
        Nike
      </CommerceRow>
      <CommerceRow
        onPress={() => navigate("CommerceProduits", { name: "Mercedes" })}
      >
        Mercedes
      </CommerceRow>
      {/* <Button>Ajouter</Button> */}
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommercesScreen;
