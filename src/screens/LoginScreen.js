import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AuthContainer, Label, Input, Button } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions";

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthContainer
      containerstyle={{ alignItems: "center", justifyContent: "space-around" }}
    >
      <View alignItems={"center"}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoStyle}
        />
        <Input
          label="Identifiant :"
          placeholder="Votre identifiant"
          value={username}
          onChangeText={val => setUsername(val)}
        />
        <Input
          password
          label="Mot de passe :"
          placeholder="Mot de passe"
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <Button onPress={() => dispatch(login({ username, password }))}>
        Se connecter
      </Button>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: 223,
    height: 100,
    marginVertical: 50
  }
});

export default LoginScreen;
