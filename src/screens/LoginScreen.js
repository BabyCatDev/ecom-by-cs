import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label } from "../components";

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Label>I'm LoginScreen</Label>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
