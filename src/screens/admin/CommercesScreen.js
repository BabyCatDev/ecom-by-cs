import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommerceRow,
  AddButton,
  OwnBottomSheet
} from "../../components";
import { fetchCompanies, selectCompany, deleteCompany } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const CommercesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const [companies] = useSelector(({ companiesData }) => [
    companiesData.companies
  ]);
  const [selectedCompany, setSelectedCompany] = useState({});
  const sheetRef = useRef(null);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Liste des\nentreprises"}</Label>
      <View marginVertical={20} />
      <FlatList
        data={companies}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommerceRow
            onPress={() => {
              dispatch(selectCompany({ companyId: item._id }));
              navigate("CommerceProduits");
            }}
            onLongPress={() => {
              sheetRef.current.openSheet();
              setSelectedCompany(item);
            }}
          >
            {item.name}
          </CommerceRow>
        )}
      />
      <OwnBottomSheet
        ref={sheetRef}
        editFunction={() => {
          alert("navigate to update");
          sheetRef.current.closeSheet();
        }}
        deleteFunction={() => {
          dispatch(deleteCompany({ companyId: selectedCompany._id }));
          sheetRef.current.closeSheet();
        }}
      />
      <AddButton onPress={() => navigate("AjouterCommerce")}>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommercesScreen;
