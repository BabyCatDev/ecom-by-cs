import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";
const StatsModal = ({ close, items, items2, title, title2 }) => {
  const { colors } = useTheme();
  const list = Object.entries(items).map(([k, v]) => ({ name: k, count: v }));
  const total = list.reduce((acc, i) => acc + i.count, 0);
  let list2, total2;
  if (items2) {
    list2 = Object.entries(items2).map(([k, v]) => ({ name: k, count: v }));
    total2 = list2.reduce((acc, i) => acc + i.count, 0);
  }
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <ScrollView style={{ paddingTop: 130 }}>
        {title && (
          <Text style={[styles.titleStyle, { color: colors.primary }]}>
            {title.toUpperCase()}
          </Text>
        )}
        {list.map((item, index) => (
          <View key={index}>
            <Text
              style={[
                styles.option,
                {
                  color: colors.black
                }
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.option,
                {
                  color: colors.black
                }
              ]}
            >
              {((item.count / total) * 100).toFixed(2) + " %"}
            </Text>
          </View>
        ))}
        {list2 && <View paddingVertical={20} />}

        {title2 && (
          <Text style={[styles.titleStyle, { color: colors.primary }]}>
            {title2.toUpperCase()}
          </Text>
        )}
        {list2?.map((item, index) => (
          <View key={index}>
            <Text
              style={[
                styles.option,
                {
                  color: colors.black
                }
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.option,
                {
                  color: colors.black
                }
              ]}
            >
              {((item.count / total2) * 100).toFixed(2) + " %"}
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
  titleStyle: {
    fontSize: 13,
    fontFamily: "Montserrat-SemiBold",
    paddingVertical: 3,
    marginVertical: 5,
    textAlign: "center"
  },
  option: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    paddingVertical: 1.5,
    marginVertical: 2,
    textAlign: "center"
  }
});

export { StatsModal };
