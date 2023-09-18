import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ children, bgColor, onPress }) => {
  const { colors } = useTheme();
  const [isPressed, setPressed] = useState(false);
  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <LinearGradient
        style={[styles.buttonStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          isPressed
            ? [colors.primary, colors.primary]
            : [colors.secondary, colors.primary]
        }
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[styles.textStyle, { color: colors.white }]}
        >
          {children.toUpperCase()}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export { Button };

const styles = StyleSheet.create({
  buttonStyle: {
    width: 182,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 25
  },
  textStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    textAlign: "center"
  }
});
