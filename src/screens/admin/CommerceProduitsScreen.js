import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  ProduitRow,
  AddButton
} from "../../components";

const CommerceProduitsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const { name, products } = item;
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{name}</Label>
      <View marginVertical={20} />
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ProduitRow name={item.name} prix={item.price + " CFA"} />
        )}
      />
      <AddButton>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommerceProduitsScreen;
