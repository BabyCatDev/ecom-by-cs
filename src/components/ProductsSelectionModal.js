import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
import { Input } from "./Input";
import { SelectionModal } from "./SelectionModal";
import { Selector } from "./Selector";
import { ProduitDetails } from "./ProduitDetails";
import { fetchCompanies, selectCompany } from "../actions";
import { Plus, Minus } from "../icons";
import { useSelector, useDispatch } from "react-redux";

const ProductsSelectionModal = ({ close, products, setProducts }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const [companies] = useSelector(({ companiesData }) => [
    companiesData.companies
  ]);
  const companiesName = companies.map(c => c.name);
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [companiesModal, setCompaniesModal] = useState(false);
  const [productsModal, setProductsModal] = useState(false);
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <Modal animationType="slide" transparent={true} visible={companiesModal}>
        <SelectionModal
          close={() => setCompaniesModal(false)}
          onSelect={val => setCompany(val)}
          value={company}
          items={companiesName}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={productsModal}>
        <SelectionModal
          close={() => setProductsModal(false)}
          onSelect={val => {
            const tempProduct = companies
              .find(c => c.name === company)
              ?.products?.find(p => p.name === val);
            setSelectedProduct(tempProduct);
          }}
          value={
            companies
              .find(c => c.name === company)
              ?.products?.map(p => p.name)[0]
          }
          items={
            companies
              .find(c => c.name === company)
              ?.products?.map(p => p.name) || []
          }
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <Selector
          label="Nom de l'entreprise"
          text={company || "Choisir une entreprise"}
          onPress={() => setCompaniesModal(true)}
        />
        <Selector
          label="Nom de produit"
          text={
            selectedProduct?.name
              ? selectedProduct?.name + " (" + selectedProduct?.price + " cfa)"
              : "Choisir un produit"
          }
          onPress={() => {
            if (company) setProductsModal(true);
          }}
        />
        <Input
          label="Quantité"
          placeholder="Quantité"
          value={quantity}
          onChangeText={val => setQuantity(val)}
          keyboardType={"decimal-pad"}
        />
        <View marginVertical={20} />
        <Pressable
          onPress={() =>
            setProducts([
              ...products,
              {
                productId: selectedProduct?._id,
                quantity: quantity,
                name: selectedProduct?.name,
                price: selectedProduct?.price,
                companyId: companies.find(c => c.name === company)._id
              }
            ])
          }
          style={[
            styles.btn,
            {
              backgroundColor: colors.primary
            }
          ]}
        >
          <Plus />
        </Pressable>

        <View marginVertical={10} />
        {products.map(p => (
          <View key={p.productId} style={styles.productRow}>
            <ProduitDetails name={p.name} price={p.price} qte={p.quantity} />
            <Pressable
              onPress={() =>
                setProducts([
                  ...products.filter(item => item.productId !== p.productId)
                ])
              }
              style={[
                styles.btn,
                {
                  backgroundColor: colors.white,
                  marginLeft: 20
                }
              ]}
            >
              <Minus />
            </Pressable>
          </View>
        ))}

        <View marginVertical={20} />
        <Button onPress={() => close()}>Terminer</Button>
        <View marginVertical={20} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    paddingVertical: 3,
    marginVertical: 2,
    textAlign: "center"
  },
  btn: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 1
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 100,
    alignItems: "center"
  }
});

export { ProductsSelectionModal };
