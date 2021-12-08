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
  Button,
  DeliveryConfirmationModal
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as Linking from "expo-linking";

const DeliveryCmdDetailsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { item } = route.params;
  const {
    deliveryDate,
    clientAddress,
    clientPhones,
    clientName,
    seller,
    products,
    createdAt,
    status,
    _id,
    comments,
    postponed
  } = item;
  const [response, setResponse] = useState("");
  const [confimationModal, setConfimationModal] = useState(false);
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confimationModal}
      >
        <DeliveryConfirmationModal
          close={() => setConfimationModal(false)}
          response={response}
          orderId={_id}
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
        <Text style={[styles.key, { color: colors.black }]}>
          {"ID de commande"}
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>{_id}</Text>
        <Text style={[styles.key, { color: colors.black }]}>Client</Text>
        <Text style={[styles.value, { color: "#616161" }]}>{clientName}</Text>
        <Text style={[styles.address, { color: "#616161" }]}>
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
          Nom de commercial
        </Text>
        <Text style={[styles.value, { color: "#616161" }]}>
          {seller?.fullName || "Des données supprimées "}
        </Text>
        <Text style={[styles.key, { color: colors.black }]}>
          Téléphones de commercial
        </Text>
        {seller?.phones ? (
          seller?.phones.map((p, i) => (
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
          {products.map(p => (
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
          {products.reduce(
            (acc, val) => acc + val.sellingPrice * val.quantity,
            0
          )}{" "}
          <Currency bigger />
        </Text>
        {!postponed
          ? status === "Hold" && (
              <>
                <Button
                  onPress={() => {
                    setConfimationModal(true);
                    setResponse("yes");
                  }}
                >
                  Livré
                </Button>
                <Button
                  onPress={() => {
                    setConfimationModal(true);
                    setResponse("non");
                  }}
                >
                  Non Livré
                </Button>
                <View marginVertical={15} />
              </>
            )
          : null}
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
  address: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    marginBottom: 10,
    lineHeight: 22
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
    fontSize: 24,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 20
  }
});

export default DeliveryCmdDetailsScreen;
