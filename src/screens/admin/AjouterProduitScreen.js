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
import { addProduct, updateProduct } from "../../actions";

const AjouterProduitScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const companyName = route?.params?.companyName;
  const product = route?.params?.product;
  const productId = product._id;

  const [name, setName] = useState(product?.name || "");
  const [entreprise, setEntreprise] = useState(companyName);
  const [price, setPrice] = useState(product?.price || "");
  const [entrepriseModal, setEntrepriseModal] = useState(false);
  const [companies] = useSelector(({ companiesData }) => [
    companiesData.companies
  ]);
  const items = companies.map(c => c.name);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <Modal animationType="slide" transparent={true} visible={entrepriseModal}>
        <SelectionModal
          items={items}
          close={() => setEntrepriseModal(false)}
          value={entreprise}
          onSelect={val => setEntreprise(val)}
        />
      </Modal>
      <TopBar />
      <Label>
        {(productId ? "Mettre à jour" : "Ajouter") + " \nun produit"}
      </Label>
      <View flex={1} justifyContent={"space-between"}>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Selector
            label="Nom de l'entreprise"
            text={entreprise}
            onPress={() => setEntrepriseModal(true)}
          />
          <Input
            label="Nom de produit"
            placeholder="Nom de produit"
            value={name}
            onChangeText={val => setName(val)}
          />
          <Input
            label="Prix"
            placeholder="Prix"
            value={price}
            onChangeText={val => setPrice(val)}
            keyboardType={"decimal-pad"}
          />
        </View>
        <View marginVertical={20} />
        <Button
          onPress={() => {
            const companyId = companies.find(c => c.name === entreprise)._id;
            productId
              ? dispatch(updateProduct({ name, price, companyId, productId }))
              : dispatch(addProduct({ name, price, companyId }));
          }}
        >
          {productId ? "Mettre à jour" : "Ajouter"}
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

export default AjouterProduitScreen;
