import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const Title = ({ children, square }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {square && (
        <View
          style={[
            styles.squareStyle,
            {
              backgroundColor: colors.primary,
              marginLeft: 20
            },
          ]}
        />
      )}
      <Text
        style={[
          styles.textStyle,
          {
            color: colors.white,
            fontFamily: square ? "Montserrat-SemiBold" : "Montserrat-Regular",
            marginLeft: square ? 20 : 0
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export { Title };

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    alignSelf: "flex-start",
  },
  squareStyle: {
    width: 22,
    height: 22,
    position: "absolute",
    top: -4,
    left: -5,
  },
  textStyle: {
    fontSize: 13,
  },
});
