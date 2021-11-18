import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const ModeParagraph = ({ children, externalStyle }) => {
  const { colors } = useTheme();
  return (
    <Text style={[styles.textStyle, { color: colors.black }, externalStyle]}>
      {`vous êtes connecté en tant
que `}
      <Text style={[styles.modeStyle, { color: colors.primary }]}>
        {children}
      </Text>
    </Text>
  );
};

export { ModeParagraph };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    lineHeight: 30,
    paddingHorizontal: 30,
    marginVertical: 15,
    textAlign: "center"
  },
  modeStyle: {
    fontFamily: "Montserrat-SemiBold"
  }
});
