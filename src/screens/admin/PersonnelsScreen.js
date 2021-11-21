import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  PersonnelRow,
  AddButton,
  Accordion
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions";

const PersonnelsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [users] = useSelector(({ usersData }) => [usersData.users]);

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\npersonnels"}</Label>
      <View marginVertical={20} />
      <Accordion data={users} />
      <AddButton onPress={() => navigate("AjouterPersonnel")}>
        Ajouter
      </AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default PersonnelsScreen;
