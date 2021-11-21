import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommerceRow,
  AddButton
} from "../../components";
import { fetchCompanies, selectCompany } from "../../actions";
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
          >
            {item.name}
          </CommerceRow>
        )}
      />

      <AddButton onPress={() => navigate("AjouterCommerce")}>Ajouter</AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommercesScreen;
