import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { useSelector, useDispatch } from "react-redux";
import { respondToOrder } from "../actions";

const DeliveryConfirmationModal = ({ close, response, orderId }) => {
  const { colors } = useTheme();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  return (
    <View
      justifyContent="space-around"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <Label>
          {response === "yes" ? "Livré avec succès" : "Échec de livraison"}
        </Label>
        <View marginVertical={20} />
        <Text style={[styles.message, { color: colors.black }]}>
          {response === "yes"
            ? "Confirmez-vous que la commande a été livrée avec succès !"
            : "Dites-nous pourquoi la commande n'a pas été livrée ?"}
        </Text>
        <View marginVertical={20} />
        {response !== "yes" && (
          <View alignItems={"center"}>
            <Input
              label="Message"
              placeholder="Message"
              value={message}
              onChangeText={val => setMessage(val)}
              multiline
            />
          </View>
        )}

        <View marginVertical={40} />
        <View>
          <Button
            onPress={() => {
              dispatch(
                respondToOrder({
                  orderId,
                  deliveryFeedback: message,
                  status: response === "yes" ? "Succeed" : "Failed"
                })
              );
            }}
          >
            {response === "yes" ? "Oui" : "Envoyer"}
          </Button>
          <Button onPress={() => close()}>Fermer</Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginVertical: 2,
    paddingHorizontal: 15,
    textAlign: "center",
    lineHeight: 30
  },
  scrollStyle: {
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: 100
  }
});

export { DeliveryConfirmationModal };
