import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Button } from "./Button";
import { Selector } from "./Selector";
import { Label } from "./Label";
import { CustomDatePicker } from "./CustomDatePicker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
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
  const [mode, setMode] = useState(`Aujourd'hui`);
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
          setValue={val => {
            if (mode === "Jour") {
              setFromDate(val);
              const nextDay = dayjs(val).add(1, "day");
              const parsedNextDay = dayjs(nextDay).format("YYYY/MM/DD");
              setToDate(parsedNextDay);
            } else {
              setFromDate(val);
            }
          }}
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
            setMode(`Aujourd'hui`);
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
                  mode === `Aujourd'hui`
                    ? "Montserrat-SemiBold"
                    : "Montserrat-Regular"
              }
            ]}
          >
            Aujourd'hui
          </Text>
        </Pressable>
        <View style={styles.separator} backgroundColor={colors.primary} />
        <Pressable
          onPress={() => {
            setMode("Jour");
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: colors.black,
                fontFamily:
                  mode === `Jour` ? "Montserrat-SemiBold" : "Montserrat-Regular"
              }
            ]}
          >
            Un jour précis
          </Text>
        </Pressable>

        <View style={styles.separator} backgroundColor={colors.primary} />
        <Pressable
          onPress={() => {
            setMode("Period");
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: colors.black,
                fontFamily:
                  mode === `Period`
                    ? "Montserrat-SemiBold"
                    : "Montserrat-Regular"
              }
            ]}
          >
            Une période de jours
          </Text>
        </Pressable>
      </View>
      {mode === `Jour` ? (
        <Selector
          label="Choisir un jour"
          text={
            fromDate.length > 0
              ? `${dayjs(fromDate).format("YYYY-MM-DD")}`
              : "Choisir une date"
          }
          onPress={() => setFromModal(true)}
        />
      ) : mode === `Period` ? (
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
      ) : null}
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
