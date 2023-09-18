import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
const TypeEmploiModal = ({ close, onTypeSelect, value }) => {
  const { colors } = useTheme();
  return (
    <View
      justifyContent="center"
      flex={1}
      backgroundColor={colors.background + "DD"}
    >
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => {
            onTypeSelect("Administrateur");
            close();
          }}
        >
          <Text
            style={[
              styles.option,
              {
                color: value == "Administrateur" ? colors.primary : colors.black
              }
            ]}
          >
            Administrateur
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onTypeSelect("Commercial");
            close();
          }}
        >
          <Text
            style={[
              styles.option,
              { color: value == "Commercial" ? colors.primary : colors.black }
            ]}
          >
            Commercial
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onTypeSelect("Livreur");
            close();
          }}
        >
          <Text
            style={[
              styles.option,
              { color: value == "Livreur" ? colors.primary : colors.black }
            ]}
          >
            Livreur
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    paddingVertical: 3,
    marginVertical: 2
  }
});

export { TypeEmploiModal };
