import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  Button,
  Input,
  TypeEmploiModal,
  Selector,
  SelectionModal
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { updateProductQuantity } from "../../actions";

const UpdateStockScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const product = route.params.product;
  const productId = product?._id;
  const productName = product?.name;
  const productStock = product?.stock;

  const [stock, setStock] = useState(productStock.toString());

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Quantité de " + productName}</Label>
      <View flex={1} justifyContent={"space-between"}>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Input
            label="Quantité"
            placeholder="Quantité"
            value={stock}
            onChangeText={val => setStock(val)}
            keyboardType={"decimal-pad"}
          />
        </View>
        <View marginVertical={20} />
        <Button
          onPress={() => dispatch(updateProductQuantity({ stock, productId }))}
        >
          {"Mettre à jour"}
        </Button>
        <View marginVertical={20} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  }
});

export default UpdateStockScreen;
