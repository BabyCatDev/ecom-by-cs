import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, Button, Input } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions";

const UpdatePersonnelScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const user = route.params.user;
  const [fullName, setFullName] = useState(user.fullName || "");
  const [email, setEmail] = useState(user.email || "");
  const [phones, setPhones] = useState(user.phones || [""]);
  const [place, setPlace] = useState(user.place || "");
  const dispatch = useDispatch();
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Mettre à jour un \npersonnel"}</Label>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Text style={[styles.key, { color: colors.black }]}>
            {"Type d'emploi"}
          </Text>
          <Text style={[styles.value, { color: "#616161" }]}>{user.type}</Text>
          <Text style={[styles.key, { color: colors.black }]}>
            {"Identifiant"}
          </Text>
          <Text style={[styles.value, { color: "#616161" }]}>
            {user.username}
          </Text>
          <Input
            label="Nom complet"
            placeholder="Nom complet"
            value={fullName}
            onChangeText={val => setFullName(val)}
          />
          <Input
            label="Email"
            placeholder="name@gmail.com"
            value={email}
            onChangeText={val => setEmail(val)}
          />
          {phones.map((p, index1) => (
            <Input
              key={index1}
              label={`Téléphone (${index1 + 1})`}
              placeholder="01-23-45-56-78"
              value={p}
              onChangeText={val =>
                setPhones([
                  ...phones.map((phone, index2) =>
                    index1 === index2 ? val : phone
                  )
                ])
              }
              keyboardType={"decimal-pad"}
            />
          ))}
          <View flexDirection={"row"}>
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.7 : 1, marginHorizontal: 10 }
              ]}
              onPress={() => setPhones([...phones, ""])}
            >
              <Text style={[styles.btn, { color: colors.green }]}>
                AJOUTER PLUS
              </Text>
            </Pressable>
            {phones.length > 1 && (
              <Pressable
                style={({ pressed }) => [
                  { opacity: pressed ? 0.7 : 1, marginHorizontal: 10 }
                ]}
                onPress={() => setPhones([...phones.slice(0, -1)])}
              >
                <Text style={[styles.btn, { color: colors.red }]}>
                  SUPPRIMER
                </Text>
              </Pressable>
            )}
          </View>
          <Input
            label="Emplacement"
            placeholder="Emplacement"
            value={place}
            onChangeText={val => setPlace(val)}
            multiline
          />
        </View>
        <View marginVertical={20} />
        <Button
          onPress={() => {
            dispatch(
              updateUser({ fullName, email, phones, place, userId: user._id })
            );
          }}
        >
          Mettre à jour
        </Button>
        <View marginVertical={20} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  },
  btn: {
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
    fontSize: 14
  },
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

export default UpdatePersonnelScreen;
