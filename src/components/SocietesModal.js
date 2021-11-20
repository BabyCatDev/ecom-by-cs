import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
const SocietesModal = ({ close, onSocieteSelect, value, items }) => {
  const { colors } = useTheme();
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "BB"}
    >
      <ScrollView style={{ paddingTop: 130 }}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              onSocieteSelect(item);
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

export { SocietesModal };
