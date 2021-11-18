import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";

const CommandeRow = ({ status, client, total, date }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <Text style={[styles.status, { color: colors.primary }]}>{status}</Text>
      <Text style={[styles.client, { color: colors.black }]}>
        {"Client: " + client}
      </Text>
      <View style={styles.row}>
        <Text style={[styles.price, { color: colors.black }]}>{total}</Text>
        <Text style={[styles.date, { color: "#92908F" }]}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 20,
    height: 125,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    marginBottom: 15
  },
  status: { fontFamily: "Montserrat-Medium", fontSize: 18 },
  client: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18
  },
  price: { fontSize: 25, fontFamily: "Montserrat-SemiBold" },
  date: { fontSize: 15, fontFamily: "Montserrat-SemiBold" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export { CommandeRow };
