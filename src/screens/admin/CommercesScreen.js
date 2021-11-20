import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommerceRow,
  AddButton
} from "../../components";

const CommercesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\nentreprises"}</Label>
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
      <AddButton onPress={() => navigate("AjouterCommerce")}>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommercesScreen;
