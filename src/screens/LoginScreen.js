import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AuthContainer, Label, Input, Button } from "../components";

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContainer
      containerstyle={{ alignItems: "center", justifyContent: "space-around" }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logoStyle}
      />
      <View>
        <Input
          label="Identifiant :"
          placeholder="Votre identifiant"
          value={name}
          onChangeText={val => setName(val)}
        />
        <Input
          password
          label="Mot de passe :"
          placeholder="Mot de passe"
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <Button>Se connecter</Button>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 223,
    height: 100
  }
});

export default LoginScreen;
