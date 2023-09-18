import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, Button, Input } from "../../components";
import { addCompany, updateCompany } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const AjouterCommerceScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const item = route.params?.item;
  const companyId = item?._id;
  const companyName = item?.name;
  const [name, setName] = useState(companyName || "");
  const dispatch = useDispatch();
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>
        {(companyId ? "Mettre à jour" : "Ajouter") + " une \nentreprise"}
      </Label>
      <View marginVertical={20} />
      <View flex={1} alignItems={"center"} justifyContent={"space-around"}>
        <Input
          label="Nom de l'entreprise"
          placeholder="Nom de l'entreprise"
          value={name}
          onChangeText={val => setName(val)}
        />
        <Button
          onPress={() =>
            companyId
              ? dispatch(updateCompany({ name, companyId }))
              : dispatch(addCompany({ name }))
          }
        >
          {companyId ? "Mettre à jour" : "Ajouter"}
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default AjouterCommerceScreen;
