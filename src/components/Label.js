import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const Label = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.contain}>
      <Text style={[styles.textStyle, { color: colors.gray }]}>{children}</Text>
    </View>
  );
};

export { Label };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    fontFamily: "Montserrat-Bold"
  }
});
