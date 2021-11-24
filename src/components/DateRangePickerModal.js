import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Button } from "./Button";
import { Selector } from "./Selector";
import { Label } from "./Label";
import { CustomDatePicker } from "./CustomDatePicker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const DateRangePickerModal = ({
  close,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  submit
}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const [fromModal, setFromModal] = useState(false);
  const [toModal, setToModal] = useState(false);
  return (
    <View
      justifyContent="space-around"
      alignItems="center"
      paddingTop={120}
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <Modal animationType="slide" transparent={true} visible={fromModal}>
        <CustomDatePicker
          value={dayjs(fromDate || new Date()).format("YYYY-MM-DD")}
          setValue={val => setFromDate(val)}
          close={() => setFromModal(false)}
          minimumDate={null}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={toModal}>
        <CustomDatePicker
          value={dayjs(toDate || new Date()).format("YYYY-MM-DD")}
          setValue={val => setToDate(val)}
          close={() => setToModal(false)}
          minimumDate={null}
        />
      </Modal>
      <View>
        <Pressable
          onPress={() => {
            setToDate("");
            setFromDate("");
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: colors.black,
                fontFamily:
                  fromDate.length > 0 || toDate.length > 0
                    ? "Montserrat-Regular"
                    : "Montserrat-SemiBold"
              }
            ]}
          >
            Aujourd'hui
          </Text>
        </Pressable>
        <View style={styles.separator} backgroundColor={colors.primary} />

        <Text
          style={[
            styles.text,
            {
              color: colors.black,
              fontFamily:
                fromDate.length > 0 || toDate.length > 0
                  ? "Montserrat-SemiBold"
                  : "Montserrat-Regular"
            }
          ]}
        >
          Date personnalisée
        </Text>
      </View>
      <View>
        <Selector
          label="De"
          text={
            fromDate.length > 0
              ? `${dayjs(fromDate).format("YYYY-MM-DD")}`
              : "Choisir une date"
          }
          onPress={() => setFromModal(true)}
        />
        <Selector
          label="Jusqu'à"
          text={
            toDate.length > 0
              ? `${dayjs(toDate).format("YYYY-MM-DD")}`
              : "Choisir une date"
          }
          onPress={() => setToModal(true)}
        />
      </View>
      <View>
        <Button onPress={submit}>Terminer</Button>
        <Button onPress={close}>Fermer</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  separator: {
    width: 100,
    height: 2,
    borderRadius: 1,
    alignSelf: "center",
    marginBottom: 20
  }
});

export { DateRangePickerModal };
