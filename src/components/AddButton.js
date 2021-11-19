import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Plus } from "../icons";

const AddButton = ({ children, bgColor, onPress }) => {
  const { colors } = useTheme();
  return (
    <Pressable
      style={{ position: "absolute", bottom: 20, right: 20 }}
      onPress={onPress}
    >
      <LinearGradient
        style={[styles.buttonStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.secondary, colors.primary]}
      >
        <Plus />
        <Text style={[styles.textStyle, { color: colors.white }]}>
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export { AddButton };

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row"
  },
  textStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    textAlign: "center",
    paddingLeft: 15
  }
});
