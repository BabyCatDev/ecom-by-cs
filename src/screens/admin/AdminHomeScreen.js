import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  Button,
  ModeParagraph,
  RoundedCard
} from "../../components";
import { Stats, Cart, Bag, Users, Logout } from "../../icons";

const AdminHomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <ModeParagraph>un administrateur</ModeParagraph>
        <View style={styles.helloContainer}>
          <Label>{"Salut\nBamba!"}</Label>
          <Logout />
        </View>
        <RoundedCard icon={() => <Stats />}>
          {"Voir les\nStatistiques"}
        </RoundedCard>
        <RoundedCard
          onPress={() => navigate("Commerces")}
          icon={() => <Cart />}
        >
          {"Voir les\nCommerces"}
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
