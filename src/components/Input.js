import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Label } from "./Label";
// import { Eye, EyeSlashed } from "../icons";

const Input = ({
  label,
  placeholder,
  password,
  fullWidth,
  multiline,
  ...props
}) => {
  const { colors } = useTheme();
  const [isPasswordHidden, setPasswordHidden] = useState(false);
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 6 }}>
        <Label>{label}</Label>
      </View>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: colors.secondary + "63",
            borderColor: isFocused ? colors.primary : "transparent",
            width: fullWidth ? "auto" : 224,
            height: multiline ? "auto" : 40
          }
        ]}
      >
        <TextInput
          secureTextEntry={password ? !isPasswordHidden : false}
          placeholder={placeholder}
          placeholderTextColor={"#F2F4F544"}
          style={[
            styles.inputStyle,
            {
              color: colors.white,
              textAlignVertical: multiline ? "top" : "auto",
              paddingTop: multiline ? 10 : 0
            }
          ]}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          multiline={multiline}
          {...props}
        />
        {password && (
          <Pressable
            style={{ paddingLeft: 4 }}
            onPress={() => setPasswordHidden(!isPasswordHidden)}
          >
            {/* {isPasswordHidden ? <Eye /> : <EyeSlashed />} */}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 7 },
  inputContainer: {
    flexDirection: "row",
    paddingLeft: 13,
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "transparent"
  },
  inputStyle: {
    fontSize: 12,
    flex: 1,
    fontFamily: "Montserrat-Regular"
  }
});

export { Input };
