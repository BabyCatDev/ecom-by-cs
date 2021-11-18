import React, { Fragment } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const Container = ({ children, containerstyle }) => {
  const { colors } = useTheme();
  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: colors.primary, flex: 0 }} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background
          },
          containerstyle
        ]}
      >
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={colors.primary}
        />
        {children}
      </View>
    </Fragment>
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    marginTop: 30
  }
});
