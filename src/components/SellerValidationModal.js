import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Selector } from "./Selector";
import { CustomDatePicker } from "./CustomDatePicker";
import { useSelector, useDispatch } from "react-redux";
import { validateOrder } from "../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerValidationModal = ({ close, orderId, deliveryDate }) => {
  const { colors } = useTheme();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const [dateModal, setDateModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState(deliveryDate);

  return (
    <View
      justifyContent="space-around"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <Modal animationType="slide" transparent={true} visible={dateModal}>
        <CustomDatePicker
          value={dayjs(scheduledDate).format("YYYY-MM-DD")}
          close={() => setDateModal(false)}
          setValue={val => setScheduledDate(val)}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <Label>{"Confirmation de la commande"}</Label>

        <View marginVertical={20} />
        <Selector
          label="Date de livraison"
          text={dayjs(scheduledDate).format("YYYY-MM-DD")}
          onPress={() => setDateModal(true)}
        />

        <View marginVertical={40} />
        <View>
          <Button
            onPress={() => {
              dispatch(
                validateOrder({
                  orderId,
                  deliveryDate: scheduledDate,
                  status: "Hold"
                })
              );
            }}
          >
            {"Valider"}
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

export { SellerValidationModal };
