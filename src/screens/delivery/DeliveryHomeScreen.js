import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label } from "../../components";

const DeliveryHomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Label>I'm DeliveryHomeScreen</Label>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default DeliveryHomeScreen;
