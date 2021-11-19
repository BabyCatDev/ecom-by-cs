import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, Statistique } from "../../components";

const StatistiquesScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <Label>{"Les\nStatistiques"}</Label>
      <View marginVertical={20} />
      <View style={styles.row}>
        <Statistique title={"Revenu total"} value={120} />
        <Statistique title={"Total cmds"} value={50} />
      </View>
      <View style={styles.row}>
        <Statistique title={"Livraisons"} value={26} />
        <Statistique title={"Produits"} value={19} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  }
});

export default StatistiquesScreen;
