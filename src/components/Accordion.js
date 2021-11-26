import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  UIManager,
  Platform,
  FlatList
} from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { ArrowDown } from "../icons";
import { PersonnelRow } from "./PersonnelRow";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const AccordionHeader = ({ title, color, onPress, isOpen }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.accordionContainer,
        {
          backgroundColor: color + "22"
        }
      ]}
    >
      <Text style={[styles.personnelType, { color: color }]}>{title}</Text>
      <ArrowDown
        stroke={color}
        style={{
          transform: [{ rotate: isOpen ? "0deg" : "270deg" }]
        }}
      />
    </Pressable>
  );
};
const Accordion = ({ data, openBottomSheet, setSelectedUser }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [isSellerOpen, setSellerOpen] = useState(false);
  const [isDeliveryOpen, setDeliveryOpen] = useState(false);
  const admins = data.filter(u => u.type === "Administrateur");
  const sellers = data.filter(u => u.type === "Commercial");
  const deliveries = data.filter(u => u.type === "Livreur");
  return (
    <View style={styles.container}>
      <AccordionHeader
        title={"Administrateurs"}
        color={colors.primary}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setAdminOpen(!isAdminOpen);
        }}
        isOpen={isAdminOpen}
      />
      {isAdminOpen && (
        <FlatList
          data={admins}
          style={{ flexGrow: 0 }}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <PersonnelRow
              onPress={() => navigate("PersonnelDetails", { item })}
              onLongPress={() => {
                setSelectedUser(item);
                openBottomSheet();
              }}
              name={item.fullName}
            />
          )}
        />
      )}
      <AccordionHeader
        title={"Commercials"}
        color={colors.blue}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setSellerOpen(!isSellerOpen);
        }}
        isOpen={isSellerOpen}
      />
      {isSellerOpen && (
        <FlatList
          data={sellers}
          style={{ flexGrow: 0 }}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <PersonnelRow
              onPress={() => navigate("PersonnelDetails", { item })}
              onLongPress={() => {
                setSelectedUser(item);
                openBottomSheet();
              }}
              name={item.fullName}
            />
          )}
        />
      )}
      <AccordionHeader
        title={"Livreurs"}
        color={colors.green}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setDeliveryOpen(!isDeliveryOpen);
        }}
        isOpen={isDeliveryOpen}
      />
      {isDeliveryOpen && (
        <FlatList
          data={deliveries}
          keyExtractor={item => item._id}
          style={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <PersonnelRow
              onPress={() => navigate("PersonnelDetails", { item })}
              onLongPress={() => {
                setSelectedUser(item);
                openBottomSheet();
              }}
              name={item.fullName}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  personnelType: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18
  },
  accordionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15
  }
});

export { Accordion };
