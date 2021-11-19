import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Playing, X, Info, Checked } from "../icons";

const CommandStatus = ({ status, ...props }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const color =
    status === "Waiting"
      ? colors.blue
      : status === "Delivered"
      ? colors.green
      : status === "Delivering"
      ? colors.primary
      : colors.red;
  const renderIcon = () =>
    status === "Waiting" ? (
      <Info />
    ) : status === "Delivered" ? (
      <Checked />
    ) : status === "Delivering" ? (
      <Playing />
    ) : (
      <X />
    );
  const textStatus =
    status === "Waiting"
      ? `en attente d'une réponse`
      : status === "Delivered"
      ? `Livré avec succès`
      : status === "Delivering"
      ? `Livrer maintenant`
      : `Non livré`;
  return (
    <View style={styles.container} {...props}>
      <Text
        style={[styles.status, { color }]}
      >{`${textStatus.toUpperCase()}`}</Text>
      {renderIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  status: { fontFamily: "Montserrat-Bold", fontSize: 12, marginRight: 5 }
});

export { CommandStatus };
