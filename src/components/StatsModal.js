import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
const StatsModal = ({ close, value, items }) => {
  const { colors } = useTheme();
  const list = Object.entries(items).map(([k, v]) => ({ name: k, count: v }));
  console.log(list);
  const total = list.reduce((acc, i) => acc + i.count, 0);
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <ScrollView style={{ paddingTop: 130 }}>
        {list.map((item, index) => (
          <View key={index}>
            <Text
              style={[
                styles.option,
                {
                  color: value == item ? colors.primary : colors.black
                }
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.option,
                {
                  color: value == item ? colors.primary : colors.black
                }
              ]}
            >
              {(item.count / total) * 100 + " %"}
            </Text>
          </View>
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

export { StatsModal };
