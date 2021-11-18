import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";

const PersonnelRow = ({ name, type, onPress }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const color =
    type === "Administrateur"
      ? colors.primary
      : type === "Commercial"
      ? colors.blue
      : colors.green;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#BABABA0B" : "#BABABA22" }
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor: colors.black
          }
        ]}
      />
      <View paddingLeft={20}>
        <Text style={[styles.personnelName, { color: colors.black }]}>
          {name}
        </Text>
        <Text style={[styles.personnelType, { color }]}>{type}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 7,
    borderRadius: 5
  },
  personnelName: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8
  },
  personnelType: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18
  }
});

export { PersonnelRow };
