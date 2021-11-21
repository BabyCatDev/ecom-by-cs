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
import { useSelector, useDispatch } from "react-redux";

const CommerceProduitsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const [selectedCompany] = useSelector(({ companiesData }) => [
    companiesData.selectedCompany
  ]);
  const { name, products } = selectedCompany;
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
      <AddButton
        onPress={() => navigate("AjouterProduit", { companyName: name })}
      >
        Ajouter
      </AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommerceProduitsScreen;
