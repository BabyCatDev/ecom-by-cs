import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
const SelectionModal = ({ close, onSelect, value, items }) => {
  const { colors } = useTheme();
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <ScrollView style={{ paddingTop: 130 }}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              onSelect(item);
              close();
            }}
          >
            <Text
              style={[
                styles.option,
                {
                  color: value == item ? colors.primary : colors.black
                }
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <Button onPress={() => close()}>Fermer</Button>
      <View marginVertical={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    paddingVertical: 3,
    marginVertical: 2,
    textAlign: "center"
  }
});

export { SelectionModal };
