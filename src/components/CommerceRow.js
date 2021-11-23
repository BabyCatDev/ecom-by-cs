import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { ArrowRight } from "../icons";

const CommerceRow = ({ children, onPress }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#BABABA0B" : "#BABABA22" }
      ]}
    >
      <Text style={[styles.commerceName, { color: colors.black }]}>
        {children}
      </Text>
      <ArrowRight />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    marginBottom: 7,
    borderRadius: 5
  },
  commerceName: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18
  }
});

export { CommerceRow };
