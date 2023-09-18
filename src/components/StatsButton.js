import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const StatsButton = ({ children, icon, onPress, color, opacity }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? color + "F1" : color }
      ]}
      opacity={opacity}
    >
      {icon()}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.textStyle, { color: colors.white }]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 6
  },
  textStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 13
  },
  iconContainer: {
    width: 94,
    height: 94,
    borderRadius: 47,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { StatsButton };
