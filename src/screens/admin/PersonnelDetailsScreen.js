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
import {
  Container,
  Label,
  TopBar,
  CommandStatus,
  ProduitDetails,
  Currency,
  GeneratePasswordModal
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../actions";

const PersonnelDetailsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { item } = route.params;
  const [passwordModal, setPasswordModal] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={passwordModal}>
        <GeneratePasswordModal
          username={item?.username}
          password={generatedPassword}
          setPassword={setGeneratedPassword}
          close={() => setPasswordModal(false)}
          done={() => {
            dispatch(
              updatePassword({
                id: item?._id,
                generatedPassword: generatedPassword
              })
            );
            setPasswordModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <View marginVertical={5} />
        <Text style={[styles.key, { color: colors.black }]}>Type d'emploi</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{item?.type}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Nom complet</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {item?.fullName}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>Identifiant</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {item?.username}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>Mot de passe</Text>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          onPress={() => setPasswordModal(true)}
        >
          <Text style={[styles.generatePass, { color: colors.blue }]}>
            Générer un nouveau mot de passe
          </Text>
        </Pressable>
        <Text style={[styles.key, { color: colors.black }]}>Email</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{item?.email}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Téléphone</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{item?.phone}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Emplacement</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{item?.place}</Text>
        <View marginVertical={15} />
      </ScrollView>
    </Container>
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
  },
  generatePass: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 30
  },
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  },
  total: {
    fontFamily: "Montserrat-Bold",
    fontSize: 27,
    textAlign: "right",
    marginVertical: 30,
    marginHorizontal: 20
  }
});

export default PersonnelDetailsScreen;
