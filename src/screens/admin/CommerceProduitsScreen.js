import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  ProduitRow,
  AddButton,
  OwnBottomSheet
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies, selectCompany, deleteProduct } from "../../actions";

const CommerceProduitsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const [selectedCompany] = useSelector(({ companiesData }) => [
    companiesData.selectedCompany
  ]);
  const { name, products, _id } = selectedCompany;
  const [selectedProduct, setSelectedProduct] = useState({});
  const sheetRef = useRef(null);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{name}</Label>
      <View marginVertical={20} />
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ProduitRow
            onLongPress={() => {
              sheetRef.current.openSheet();
              setSelectedProduct(item);
            }}
            name={item.name}
            prix={item.price + " CFA"}
          />
        )}
      />
      <OwnBottomSheet
        ref={sheetRef}
        editFunction={() => {
          alert("navigate to update");
          sheetRef.current.closeSheet();
        }}
        deleteFunction={() => {
          dispatch(
            deleteProduct({ companyId: _id, productId: selectedProduct._id })
          );
          sheetRef.current.closeSheet();
        }}
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
