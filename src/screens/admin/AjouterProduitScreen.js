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
  SocietesModal
} from "../../components";

const AjouterProduitScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [entreprise, setEntreprise] = useState("Mercedes");
  const [Price, setPrice] = useState("");
  const [entrepriseModal, setEntrepriseModal] = useState(false);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <Modal animationType="slide" transparent={true} visible={entrepriseModal}>
        <SocietesModal
          items={[
            "Mercedes",
            "Audi",
            "Lamborguini",
            "ferrari",
            "Fiat",
            "Hyundai",
            "Land Rover"
          ]}
          close={() => setEntrepriseModal(false)}
          value={entreprise}
          onSocieteSelect={val => setEntreprise(val)}
        />
      </Modal>
      <TopBar />
      <Label>{"Ajouter \nun produit"}</Label>
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
            value={Price}
            onChangeText={val => setPrice(val)}
            keyboardType={"decimal-pad"}
          />
        </View>
        <View marginVertical={20} />
        <Button>Ajouter</Button>
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
