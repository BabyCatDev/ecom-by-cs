import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Playing, X, Info, Checked } from "../icons";

const CommandStatus = ({ status, ...props }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const color =
    status === "Hold"
      ? colors.primary
      : status === "Succeed"
      ? colors.green
      : colors.red;

  const renderIcon = () =>
    status === "Hold" ? <Info /> : status === "Succeed" ? <Checked /> : <X />;
  const textStatus =
    status === "Hold"
      ? `Livraison en attente`
      : status === "Succeed"
      ? `Livré avec succès`
      : `Échec de livraison`;
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
