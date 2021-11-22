import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandStatus,
  ProduitDetails,
  Currency
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerCmdDetailsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const {
    deliveryDate,
    clientAddress,
    clientPhone,
    clientName,
    delivery,
    products,
    createdAt,
    status
  } = item;
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <View marginVertical={5} />
        <CommandStatus status={status} justifyContent={"center"} />
        <View marginVertical={20} />
        <Text style={[styles.key, { color: colors.black }]}>Nom de client</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{clientName}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Son address</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {clientAddress}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>Son telephone</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{clientPhone}</Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Date de commande
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {dayjs(createdAt).format("YYYY-MM-DD")}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Date de livraison
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {dayjs(deliveryDate).format("YYYY-MM-DD")}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>Livreur</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {delivery.fullName}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Liste des produits
        </Text>
        <View alignItems={"center"}>
          {products.map(p => (
            <ProduitDetails
              key={p._id}
              name={p.product.name}
              price={p.product.price}
              qte={p.quantity}
            />
          ))}
        </View>
        <Text style={[styles.total, { color: colors.black }]}>
          Total:{" "}
          {products.reduce(
            (acc, val) => acc + val.product.price * val.quantity,
            0
          )}{" "}
          <Currency bigger />
        </Text>
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

export default SellerCmdDetailsScreen;
