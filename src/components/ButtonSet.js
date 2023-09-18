import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonSet = ({
  selectedIndex,
  setSelectedIndex,
  length1,
  length2,
  length3,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelectedIndex(1)}
      >
        <Text
          style={
            selectedIndex == 1 ? styles.selected_buttonText : styles.buttonText
          }
        >
          {"Tout " + length1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelectedIndex(2)}
      >
        <Text
          style={
            selectedIndex == 2 ? styles.selected_buttonText : styles.buttonText
          }
        >
          {"Martin " + length2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSelectedIndex(3)}
      >
        <Text
          style={
            selectedIndex == 3 ? styles.selected_buttonText : styles.buttonText
          }
        >
          {"Soir " + length3}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  selected_buttonText: {
    color: "#F66B14",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ButtonSet;
