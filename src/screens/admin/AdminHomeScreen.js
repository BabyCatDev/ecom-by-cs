import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  Button,
  ModeParagraph,
  RoundedCard
} from "../../components";
import { Stats, Cart, Bag, Users, Logout } from "../../icons";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../../actions";

const AdminHomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const [user] = useSelector(({ auth }) => [auth.user]);
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <ModeParagraph>{`un ${user?.type?.toLowerCase()}`}</ModeParagraph>
        <View style={styles.helloContainer}>
          <Label>{`Salut\n${user?.fullName}!`}</Label>
          <Pressable onPress={() => dispatch(logout())}>
            <Logout />
          </Pressable>
        </View>
        <RoundedCard
          onPress={() => navigate("Statistiques")}
          icon={() => <Stats />}
        >
          {"Voir les\nStatistiques"}
        </RoundedCard>
        <RoundedCard
          onPress={() => navigate("Commerces")}
          icon={() => <Cart />}
        >
          {"Voir les\nEntreprises"}
        </RoundedCard>
        <RoundedCard onPress={() => navigate("Produits")} icon={() => <Bag />}>
          {"Voir les\nProduits"}
        </RoundedCard>
        <RoundedCard
          onPress={() => navigate("Personnels")}
          icon={() => <Users />}
        >
          {"Voir les\nPersonnels"}
        </RoundedCard>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  helloContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30
  },
  scrollStyle: {
    padding: 15,
    paddingTop: 30
  }
});

export default AdminHomeScreen;
