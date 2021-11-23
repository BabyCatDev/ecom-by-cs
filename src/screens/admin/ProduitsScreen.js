import React, { useEffect } from "react";
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
import { fetchProducts } from "../../actions";

const ProduitsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const [products] = useSelector(({ companiesData }) => [
    companiesData.products
  ]);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\nproduits"}</Label>
      <View marginVertical={20} />
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ProduitRow name={item.name} prix={item.price + " CFA"} />
        )}
      />
      {/* <AddButton onPress={() => navigate("AjouterProduit")}>Ajouter</AddButton> */}
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ProduitsScreen;
