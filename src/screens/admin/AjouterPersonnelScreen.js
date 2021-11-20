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
  Selector
} from "../../components";

const AjouterPersonnelScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [type, setType] = useState("Administrateur");
  const [name, setName] = useState("");
  const [identifiant, setIdentifiant] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [typeModal, setTypeModal] = useState(false);
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={typeModal}>
        <TypeEmploiModal
          close={() => setTypeModal(false)}
          value={type}
          onTypeSelect={type => setType(type)}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Ajouter un \npersonnel"}</Label>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Selector
            label="Type d'emploi"
            text={type}
            onPress={() => setTypeModal(true)}
          />
          <Input
            label="Nom complet"
            placeholder="Nom complet"
            value={name}
            onChangeText={val => setName(val)}
          />
          <Input
            label="Identifiant"
            placeholder="Identifiant"
            value={identifiant}
            onChangeText={val => setIdentifiant(val)}
          />
          <Input
            label="Email"
            placeholder="name@gmail.com"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          <Input
            label="Téléphone"
            placeholder="01-23-45-56-78"
            value={phone}
            onChangeText={val => setPhone(val)}
          />
          <Input
            label="Emplacement"
            placeholder="Emplacement"
            value={place}
            onChangeText={val => setPlace(val)}
            multiline
          />
        </View>
        <View marginVertical={20} />
        <Button>Ajouter</Button>
        <View marginVertical={20} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  }
});

export default AjouterPersonnelScreen;
