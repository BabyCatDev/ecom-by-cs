import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, CommerceRow } from "../../components";
import { fetchCompanies } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const CommercesStatsScreen = ({ navigation }) => {
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
      <Label>{"Stats des\nentreprises"}</Label>
      <View marginVertical={20} />
      <FlatList
        data={companies}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommerceRow
            onPress={() => {
              navigate("CompanyStats", { item });
            }}
          >
            {item.name}
          </CommerceRow>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default CommercesStatsScreen;
