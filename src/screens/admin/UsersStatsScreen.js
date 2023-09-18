import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, PersonnelRow } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../actions";

const UsersStatsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const type = route.params.type;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [users] = useSelector(({ usersData }) => [usersData.users]);
  const sellers = users.filter(u => u.type === "Commercial");
  const deliveries = users.filter(u => u.type === "Livreur");

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Stats des\n" + type?.toLowerCase() + "s"}</Label>
      <View marginVertical={20} />
      <FlatList
        data={type === "Commercial" ? sellers : deliveries}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <PersonnelRow
            onPress={() => navigate("UserStats", { type, item })}
            name={item.fullName}
            numPostponed={item.numPostponed}
            type = {type}
          />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default UsersStatsScreen;
