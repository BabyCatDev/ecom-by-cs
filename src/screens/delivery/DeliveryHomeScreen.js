import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  Button,
  ModeParagraph,
  RoundedCard
} from "../../components";
import { Logout, Stats, FileText } from "../../icons";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../../actions";

const DeliveryHomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const [user] = useSelector(({ auth }) => [auth.user]);

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <ModeParagraph>{user?.type || ""}</ModeParagraph>
        <View style={styles.helloContainer}>
          <View>
            <Label>{`Salut`}</Label>
            <Label
              adjustsFontSizeToFit
              numberOfLines={1}
            >{`${user?.fullName?.split(" ")[0] || ""}!`}</Label>
          </View>
          <Pressable onPress={() => dispatch(logout())}>
            <Logout />
          </Pressable>
        </View>
        <RoundedCard onPress={() => null} icon={() => <Stats />}>
          {"Voir mes\nStatistiques"}
        </RoundedCard>
        <RoundedCard
          onPress={() => navigate("DeliveryOrders")}
          icon={() => <FileText />}
        >
          {"Voir mes\nCommandes"}
        </RoundedCard>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  helloContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 30
  },
  scrollStyle: {
    padding: 15,
    paddingTop: 30
  }
});

export default DeliveryHomeScreen;
