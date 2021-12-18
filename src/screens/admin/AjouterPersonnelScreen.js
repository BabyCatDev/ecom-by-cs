import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  Button,
  Input,
  TypeEmploiModal,
  Selector,
  GeneratePasswordModal
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../actions";

const AjouterPersonnelScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [type, setType] = useState("Administrateur");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phones, setPhones] = useState([""]);
  const [place, setPlace] = useState("");
  const [password, setPassword] = useState("");
  const [typeModal, setTypeModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={typeModal}>
        <TypeEmploiModal
          close={() => setTypeModal(false)}
          value={type}
          onTypeSelect={type => setType(type)}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={passwordModal}>
        <GeneratePasswordModal
          username={username}
          password={password}
          setPassword={setPassword}
          close={() => setPasswordModal(false)}
          done={() => {
            dispatch(
              addUser({
                type,
                fullName,
                username,
                email,
                phones,
                place,
                password
              })
            );
          }}
        />
      </Modal>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          overScrollMode={"never"}
          contentContainerStyle={styles.scrollStyle}
        >
          <TopBar />
          <Label>{"Ajouter un \npersonnel"}</Label>
          <View marginVertical={20} />
          <View alignItems={"center"}>
            <Selector
              label="Type d'emploi"
              text={type}
              onPress={() => setTypeModal(true)}
            />
            <Input
              label="Nom complet"
              placeholder="Nom complet"
              value={fullName}
              onChangeText={val => setFullName(val)}
            />
            <Input
              label="Identifiant"
              placeholder="Identifiant"
              value={username}
              onChangeText={val => setUsername(val)}
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
              setPasswordModal(true);
            }}
          >
            Ajouter
          </Button>
          <View marginVertical={20} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  }
});

export default AjouterPersonnelScreen;
