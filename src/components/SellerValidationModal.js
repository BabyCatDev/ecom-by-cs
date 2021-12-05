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
import { confirmOrder, postponeOrder } from "../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerValidationModal = ({ close, orderId, deliveryDate, status }) => {
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
        <Label>
          {status === "Reported"
            ? "Confirmation de la commande"
            : "Reprogrammation de la commande"}
        </Label>

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
              status === "Reported"
                ? dispatch(
                    confirmOrder({
                      orderId,
                      deliveryDate: scheduledDate
                    })
                  )
                : dispatch(
                    postponeOrder({
                      orderId,
                      deliveryDate: scheduledDate,
                      status: status
                    })
                  );
            }}
          >
            {status === "Reported" ? "Confirmer" : "Reprogrammer"}
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
