/* @flow weak */

import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Keyboard
} from "react-native";
import { useTheme } from "@react-navigation/native";
const AuthContainer = ({ children, containerstyle }) => {
  const { colors } = useTheme();

  return (
    <Fragment>
      <SafeAreaView style={{ backgroundColor: colors.primary, flex: 0 }} />
      <Pressable
        onPress={() => Keyboard.dismiss()}
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
      </Pressable>
    </Fragment>
  );
};

export { AuthContainer };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    marginTop: 30
  }
});
