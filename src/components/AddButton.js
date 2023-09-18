import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Plus } from "../icons";

const AddButton = ({ children, bgColor, onPress }) => {
  const { colors } = useTheme();
  const [isPressed, setPressed] = useState(false);
  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{ position: "absolute", bottom: 20, right: 20 }}
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
        <Plus width={20} height={20} />
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[styles.textStyle, { color: colors.white }]}
        >
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export { AddButton };

const styles = StyleSheet.create({
  buttonStyle: {
    width: 140,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 25,
    flexDirection: "row"
  },
  textStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    textAlign: "center",
    paddingLeft: 15,
    flex: 1
  }
});
