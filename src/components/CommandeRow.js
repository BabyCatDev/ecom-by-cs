import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { CommandStatus } from "./CommandStatus";
import dayjs from "dayjs";

const CommandeRow = ({
  status,
  client,
  total,
  date,
  onPress,
  onLongPress,
  postponed,
  address,
  updated,
  createdAt
}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const parsedDeliveryDate = dayjs(date);
  const parsedCreatedAt = dayjs(createdAt);
  const isSame = parsedDeliveryDate.isSame(parsedCreatedAt, "day");
  const heading = isSame ? "Soir" : "Matin";
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.container, { backgroundColor: colors.white }]}
    >
      <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text style={[styles.heading, { color: colors.gray }]}>{heading}</Text>
        {updated && (
          <Text style={[styles.updated, { color: colors.red + "CC" }]}>
            modifié
          </Text>
        )}
      </View>
      <Text style={[styles.client, { color: colors.black }]}>{client}</Text>
      <View marginVertical={2.5} />
      <Text style={[styles.address, { color: colors.gray }]}>{address}</Text>
      <View marginVertical={5} />
      <CommandStatus status={status} postponed={postponed} />
      <View marginVertical={5} />
      <View style={styles.row}>
        <Text style={[styles.price, { color: colors.black }]}>{total}</Text>
        <Text style={[styles.date, { color: "#92908F" }]}>{date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 13,
    justifyContent: "space-between",
    marginBottom: 15
  },
  heading: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20
  },
  client: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20
  },
  address: {
    fontFamily: "Montserrat-Medium",
    fontSize: 13
  },
  updated: {
    fontFamily: "Montserrat-Medium",
    fontSize: 13
  },
  price: { fontSize: 17, fontFamily: "Montserrat-Medium" },
  date: { fontSize: 15, fontFamily: "Montserrat-Medium" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export { CommandeRow };
