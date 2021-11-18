import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";

const CustomDatePicker = ({ close, birthday, setBirthday }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  return (
    <Pressable
      justifyContent="center"
      flex={1}
      backgroundColor={colors.secondary + "33"}
      onPress={() => close()}
    >
      <DatePicker
        mode="calendar"
        current={birthday}
        selected={birthday}
        minimumDate="1950-01-01"
        maximumDate="2007-01-01"
        onSelectedChange={selectedDate => {
          setBirthday(selectedDate);
        }}
        onDateChange={selectedDate => {
          setBirthday(selectedDate);
          close();
        }}
        options={{
          backgroundColor: colors.secondary,
          textHeaderColor: colors.white,
          selectedTextColor: colors.white,
          textDefaultColor: colors.white + "99",
          mainColor: colors.primary,
          defaultFont: "Montserrat-Regular",
          headerFont: "Montserrat-Regular"
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export { CustomDatePicker };
