import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, Button, Input } from "../../components";

const AjouterCommerceScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Ajouter une \nentreprise"}</Label>
      <View marginVertical={20} />
      <View flex={1} alignItems={"center"} justifyContent={"space-around"}>
        <Input
          label="Nom de l'entreprise"
          placeholder="Nom de l'entreprise"
          value={name}
          onChangeText={val => setName(val)}
        />
        <Button>Ajouter</Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default AjouterCommerceScreen;
