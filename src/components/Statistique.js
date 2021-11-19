import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Statistique = ({ title, value }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[colors.secondary, colors.primary]}
        >
          <Text style={[styles.keyStyle, { color: colors.white }]}>
            {title}
          </Text>
        </LinearGradient>
        <View style={[{ backgroundColor: colors.white }]}>
          <Text style={[styles.valueStyle, { color: colors.black }]}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    marginHorizontal: 5,
    height: 100,
    borderRadius: 10,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  keyStyle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10
  },
  valueStyle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10
  }
});

export { Statistique };
