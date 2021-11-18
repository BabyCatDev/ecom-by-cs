import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label } from "../../components";

const SellerHomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Label>I'm SellerHomeScreen</Label>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SellerHomeScreen;
