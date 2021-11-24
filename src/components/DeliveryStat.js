import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Currency } from "./Currency";

const DeliveryStat = ({ color, title, value, currencySign }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color + "22", borderColor: color }
      ]}
    >
      <Text style={[styles.titleStyle, { color }]}>{title}</Text>
      <Text style={[styles.valueStyle, { color }]}>
        {value}
        {currencySign && " "}
        {currencySign && <Currency />}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 10
  },
  titleStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    textAlign: "center"
  },
  valueStyle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5
  }
});

export { DeliveryStat };
