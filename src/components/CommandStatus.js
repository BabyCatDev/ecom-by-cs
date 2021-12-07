import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Playing, X, Info, Checked } from "../icons";

const CommandStatus = ({ status, postponed, ...props }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const color =
    status === "Hold"
      ? colors.primary
      : status === "Succeed"
      ? colors.green
      : status === "Failed"
      ? colors.red
      : "#787878";

  const renderIcon = () =>
    status === "Hold" ? (
      <Playing />
    ) : status === "Succeed" ? (
      <Checked />
    ) : status === "Failed" ? (
      <X />
    ) : (
      <Info />
    );
  const textStatus =
    status === "Hold"
      ? `Livraison en attente`
      : status === "Succeed"
      ? `Livré avec succès`
      : status === "Failed"
      ? `Échec de livraison`
      : `Rapport`;
  const displayedText = textStatus + (postponed ? " et reprogrammé" : "");
  return (
    <View style={styles.container} {...props}>
      <Text
        style={[styles.status, { color }]}
      >{`${displayedText.toUpperCase()}`}</Text>
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
