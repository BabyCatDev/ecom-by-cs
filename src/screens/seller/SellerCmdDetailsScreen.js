import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandStatus,
  ProduitDetails,
  Currency,
  Button,
  SellerValidationModal,
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as Linking from "expo-linking";

const SellerCmdDetailsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const {
    deliveryDate,
    clientAddress,
    clientPhones,
    clientName,
    delivery,
    products,
    createdAt,
    status,
    deliveryFeedback,
    comments,
    _id,
    postponed,
  } = item;
  const [validationModal, setValidationModal] = useState(false);

  const parsedDeliveryDate = dayjs(deliveryDate);
  const parsedCreatedAt = dayjs(createdAt);
  const isSame = parsedDeliveryDate.isSame(parsedCreatedAt, "day");
  const heading = isSame ? "Soir" : "Matin";
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={validationModal}>
        <SellerValidationModal
          orderId={_id}
          deliveryDate={deliveryDate}
          status={status}
          close={() => setValidationModal(false)}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <View marginVertical={5} />
        <CommandStatus
          status={status}
          postponed={postponed}
          justifyContent={"center"}
        />
        <View marginVertical={20} />
        <View marginVertical={5} />
        {deliveryFeedback?.length > 0 && (
          <Text style={[styles.message, { color: colors.red + "BB" }]}>
            {deliveryFeedback}
          </Text>
        )}
        <Label semi>{heading}</Label>
        <View marginVertical={5} />
        <Text style={[styles.key, { color: colors.black }]}>
          {"ID de commande"}
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>{_id}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Client</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{clientName}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Son address</Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {clientAddress}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Ses téléphones
        </Text>
        {clientPhones.map((p, i) => (
          <Pressable
            onPress={() => Linking.openURL("tel:" + p)}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            key={i}
          >
            <Text style={[styles.value, { color: "#616161" }]}>{p}</Text>
          </Pressable>
        ))}
        {comments.length > 0 && (
          <>
            <Text style={[styles.key, { color: colors.black }]}>
              Commentaires
            </Text>
            <Text style={[styles.value, { color: "#616161" }]}>{comments}</Text>
          </>
        )}
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
        <Text style={[styles.key, { color: colors.black }]}>
          Nom de livreur
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {delivery?.fullName || "Des données supprimées "}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Téléphones de livreur
        </Text>
        {delivery?.phones ? (
          delivery?.phones.map((p, i) => (
            <Pressable
              onPress={() => Linking.openURL("tel:" + p)}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              key={i}
            >
              <Text style={[styles.value, { color: "#616161" }]}>{p}</Text>
            </Pressable>
          ))
        ) : (
          <Text style={[styles.value, { color: "#616161" }]}>
            {"Des données supprimées"}
          </Text>
        )}
        <Text style={[styles.key, { color: colors.black }]}>
          Liste des produits
        </Text>
        <View alignItems={"center"}>
          {products.map((p) => (
            <ProduitDetails
              key={p._id}
              name={p?.product?.name || "Produit supprimé"}
              price={p.sellingPrice}
              qte={p.quantity}
            />
          ))}
        </View>
        <Text style={[styles.total, { color: colors.black }]}>
          Total:{" "}
          {products
            .reduce((acc, val) => acc + val.sellingPrice * val.quantity, 0)
            .toLocaleString("en-US")
            .replace(/,/g, " ")}{" "}
          <Currency bigger />
        </Text>

        {!postponed
          ? (status === "Reported" ||
              status === "Failed" ||
              status === "Hold") && (
              <>
                <Button onPress={() => setValidationModal(true)}>
                  {"Reprogrammer"}
                </Button>
                <View marginVertical={10} />
              </>
            )
          : null}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  message: {
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 40,
    lineHeight: 28,
  },
  key: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 15,
  },
  value: {
    fontFamily: "Montserrat-Medium",
    fontSize: 22,
    marginBottom: 10,
    lineHeight: 30,
  },
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  total: {
    fontFamily: "Montserrat-Bold",
    fontSize: 27,
    textAlign: "right",
    marginVertical: 30,
    marginHorizontal: 20,
  },
});

export default SellerCmdDetailsScreen;
