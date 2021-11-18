import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Label } from "./Label";
// import { ArrowRight } from "../icons";

const Selector = ({ label, text, onPress }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 6 }}>
        <Label>{label}</Label>
      </View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.inputContainer,
          {
            backgroundColor: pressed
              ? colors.secondary + "33"
              : colors.secondary + "63"
          }
        ]}
      >
        <Text style={[styles.textStyle, { color: colors.white }]}>{text}</Text>
        {/* <ArrowRight style={{ marginRight: 3 }} /> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 7 },
  inputContainer: {
    flexDirection: "row",
    height: 40,
    width: 224,
    paddingLeft: 13,
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "transparent"
  },
  textStyle: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular"
  }
});

export { Selector };
