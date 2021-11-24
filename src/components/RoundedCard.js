import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const RoundedCard = ({ children, icon, onPress }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.white }]}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.secondary, colors.primary]}
        style={styles.iconContainer}
      >
        {icon()}
      </LinearGradient>
      <Text style={styles.textStyle}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 10
  },
  textStyle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 25,
    color: "#5C5C5C",
    lineHeight: 40,
    marginLeft: 20
  },
  iconContainer: {
    width: 94,
    height: 94,
    borderRadius: 47,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { RoundedCard };
