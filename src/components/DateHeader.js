import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const DateHeader = ({ setRangeModal, fromDate, toDate }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      onPress={() => setRangeModal(true)}
    >
      <Text style={[styles.text, { color: colors.gray }]}>
        {fromDate.length > 0 && toDate.length > 0
          ? fromDate === toDate
            ? `${dayjs(fromDate).format("YYYY-MM-DD")}`
            : `${dayjs(fromDate).format("YYYY-MM-DD")} - ${dayjs(toDate).format(
                "YYYY-MM-DD"
              )}`
          : `Aujourd'hui`}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 29
  }
});

export { DateHeader };
