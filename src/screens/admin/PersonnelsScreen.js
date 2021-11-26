import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  PersonnelRow,
  AddButton,
  Accordion,
  OwnBottomSheet
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../actions";

const PersonnelsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const sheetRef = useRef(null);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [users] = useSelector(({ usersData }) => [usersData.users]);
  const [selectedUser, setSelectedUser] = useState({});
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\npersonnels"}</Label>
      <View marginVertical={20} />
      <Accordion
        data={users}
        setSelectedUser={setSelectedUser}
        openBottomSheet={() => sheetRef.current.openSheet()}
      />
      <AddButton onPress={() => navigate("AjouterPersonnel")}>
        Ajouter
      </AddButton>
      <OwnBottomSheet
        ref={sheetRef}
        editFunction={() => {
          sheetRef.current.closeSheet();
          navigate("UpdatePersonnel", { user: selectedUser });
        }}
        deleteFunction={() => {
          dispatch(deleteUser({ userId: selectedUser._id }));
          sheetRef.current.closeSheet();
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default PersonnelsScreen;
