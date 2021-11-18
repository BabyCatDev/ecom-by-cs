import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";

const ProduitRow = ({ name, prix, onPress }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
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
        <Text style={[styles.ProduitName, { color: colors.black }]}>
          {name}
        </Text>
        <Text style={[styles.prix, { color: colors.primary }]}>{prix}</Text>
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
  ProduitName: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 23
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8
  },
  prix: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20
  }
});

export { ProduitRow };
