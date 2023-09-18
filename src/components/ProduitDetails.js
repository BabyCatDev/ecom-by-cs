import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Currency } from "./Currency";
const ProduitDetails = ({ name, price, qte }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text style={[styles.name, { color: colors.black }]} numberOfLines={1}>
        {name}
      </Text>
      <Text style={[styles.priceQte, { color: "#8C8683" }]}>
        {price.toLocaleString("en-US").replace(/,/g, " ")} <Currency /> x {qte}
      </Text>
      <Text style={[styles.total, { color: colors.primary }]}>
        {(price * qte).toLocaleString("en-US").replace(/,/g, " ")} <Currency />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 13,
    height: 140,
    justifyContent: "space-between",
    marginVertical: 10,
    width: 250,
  },
  name: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 22,
  },
  priceQte: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
  total: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    textAlign: "right",
  },
});

export { ProduitDetails };
