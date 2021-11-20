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

const PersonnelDetailsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <View marginVertical={5} />
        <Text style={[styles.key, { color: colors.black }]}>Type d'emploi</Text>
        <Text style={[styles.value, { color: "#616161" }]}>Administrateur</Text>
        <Text style={[styles.key, { color: colors.black }]}>Nom complet</Text>
        <Text style={[styles.value, { color: "#616161" }]}>Cheick Bamba</Text>
        <Text style={[styles.key, { color: colors.black }]}>Identifiant</Text>
        <Text style={[styles.value, { color: "#616161" }]}>bamba</Text>
        <Text style={[styles.key, { color: colors.black }]}>Mot de passe</Text>
        <Text style={[styles.value, { color: "#616161" }]}>bamba@123</Text>
        <Text style={[styles.key, { color: colors.black }]}>Email</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          bamba@gmail.com
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>Téléphone</Text>
        <Text style={[styles.value, { color: "#616161" }]}>01-23-45-56-78</Text>
        <Text style={[styles.key, { color: colors.black }]}>Emplacement</Text>
        <Text
          style={[styles.value, { color: "#616161" }]}
        >{`Cote d'ivoire Abidjan Rue 12\nN 123`}</Text>
        <View marginVertical={15} />
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
    marginVertical: 30,
    marginHorizontal: 20
  }
});

export default PersonnelDetailsScreen;
