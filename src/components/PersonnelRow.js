import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";

const PersonnelRow = ({ name, onPress, onLongPress }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? "#BABABA0B" : "#BABABA22" }
      ]}
    >
      <View paddingLeft={20}>
        <Text style={[styles.personnelName, { color: colors.black }]}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 2,
    borderBottomWidth: 0.7,
    borderBottomColor: "#89898922"
  },
  personnelName: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 8
  }
});

export { PersonnelRow };
