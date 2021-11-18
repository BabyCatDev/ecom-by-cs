import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "../icons";
const TopBar = ({ children }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate, goBack } = navigation;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <ArrowLeft />
      </Pressable>
      <Text
        style={[
          styles.title,
          {
            color: colors.white
          }
        ]}
      >
        {children}
      </Text>
      <ArrowLeft style={{ opacity: 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20
  }
});

export { TopBar };
