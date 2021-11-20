import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Triangle } from "../icons";

const Selector = ({ label, text, onPress }) => {
  const { colors } = useTheme();
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={[styles.labelStyle, { color: colors.black }]}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            width: 260,
            height: 45
          }
        ]}
      >
        <Text
          style={[
            styles.inputStyle,
            {
              color: colors.black
            }
          ]}
        >
          {text}
        </Text>
        <Triangle />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 7 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingRight: 5,
    paddingLeft: 2
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
    fontFamily: "Montserrat-Medium"
  },
  labelStyle: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium"
  }
});

export { Selector };
