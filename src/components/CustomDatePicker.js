import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const CustomDatePicker = ({ close, value, setValue, ...props }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate());
  return (
    <Pressable
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
      onPress={() => close()}
    >
      <DatePicker
        mode="calendar"
        current={value}
        selected={value}
        minimumDate={dayjs(yesterday).format("YYYY-MM-DD")}
        onSelectedChange={selectedDate => {
          setValue(selectedDate);
        }}
        onDateChange={selectedDate => {
          setValue(selectedDate);
          close();
        }}
        options={{
          backgroundColor: colors.background,
          textHeaderColor: colors.gray,
          selectedTextColor: colors.white,
          textDefaultColor: colors.black,
          mainColor: colors.primary,
          defaultFont: "Montserrat-Regular",
          headerFont: "Montserrat-Regular"
        }}
        style={{
          borderTopWidth: 1.5,
          borderBottomWidth: 1.5,
          borderColor: colors.primary
        }}
        {...props}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export { CustomDatePicker };
