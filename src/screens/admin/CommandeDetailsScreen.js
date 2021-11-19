import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandStatus,
  ProduitDetails,
  Currency
} from "../../components";

const CommandeDetailsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <View marginVertical={5} />
        <CommandStatus status={"Delivered"} justifyContent={"center"} />
        <View marginVertical={20} />
        <Text style={[styles.key, { color: colors.black }]}>Nom de client</Text>
        <Text style={[styles.value, { color: "#616161" }]}>Achraf charafi</Text>
        <Text style={[styles.key, { color: colors.black }]}>Son address</Text>
        <Text
          style={[styles.value, { color: "#616161" }]}
        >{`Cote d'ivoire Abidjan Rue 12\nN 123`}</Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Date de livraison
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>07-11-2021</Text>

        <Text style={[styles.key, { color: colors.black }]}>Livreur</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          Cristiano Ronaldo
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Liste des produits
        </Text>
        <ProduitDetails name={"Air max"} price={500} qte={2} />
        <ProduitDetails name={"Xbox 360"} price={200} qte={1} />

        <Text style={[styles.total, { color: colors.black }]}>
          Total: 1200 <Currency bigger />
        </Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  key: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 15
  },
  value: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    marginBottom: 10,
    lineHeight: 30
  },
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  },
  total: {
    fontFamily: "Montserrat-Bold",
    fontSize: 27,
    textAlign: "right",
    marginVertical: 30
  }
});

export default CommandeDetailsScreen;
