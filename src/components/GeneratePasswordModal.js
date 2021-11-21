import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
import * as Clipboard from "expo-clipboard";

const GeneratePasswordModal = ({
  addUser,
  username,
  password,
  setPassword,
  close
}) => {
  const { colors } = useTheme();

  const generatePassword = () => {
    const generatedPassword = randomString(8);
    setPassword(generatedPassword);
  };
  const randomString = (len, an) => {
    an = an && an.toLowerCase();
    var str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 62;
    for (; i++ < len; ) {
      var r = (Math.random() * (max - min) + min) << 0;
      str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
    }
    return str;
  };
  const copyUser = () => {
    Clipboard.setString(`Identifiant: ${username}\nMot de passe: ${password}`);
    setCopy("copié ✔");
  };
  const [copy, setCopy] = useState("Copier");
  return (
    <View
      justifyContent="center"
      alignItems="center"
      paddingTop={120}
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <Text style={[styles.key, { color: colors.black }]}>Identifiant</Text>
      <Text selectable style={[styles.value, { color: "#616161" }]}>
        {username}
      </Text>
      <Text style={[styles.key, { color: colors.black }]}>Mot de passe</Text>
      <Text selectable style={[styles.value, { color: "#616161" }]}>
        {password}
      </Text>
      <View marginVertical={10} />
      <Pressable onPress={() => generatePassword()}>
        <Text style={[styles.key, { color: colors.blue }]}>Generer</Text>
      </Pressable>
      <Pressable onPress={() => copyUser()}>
        <Text style={[styles.key, { color: colors.green }]}>{copy}</Text>
      </Pressable>
      <View marginVertical={20} />
      <Button onPress={() => addUser()}>Ajouter</Button>
      <Pressable onPress={() => close()}>
        <Text style={[styles.key, { color: colors.gray, fontSize: 20 }]}>
          Fermer
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  key: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 15
  },
  value: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    marginBottom: 10,
    lineHeight: 30
  }
});

export { GeneratePasswordModal };
