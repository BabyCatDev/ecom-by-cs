import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const Label = ({ children, ...props }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.contain}>
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        style={[styles.textStyle, { color: colors.gray }]}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export { Label };

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    fontFamily: "Montserrat-Bold"
  }
});
