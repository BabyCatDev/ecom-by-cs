import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Eye, EyeSlashed } from "../icons";

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
      <Text style={[styles.labelStyle, { color: colors.black }]}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? colors.primary : colors.gray,
            width: fullWidth ? "auto" : 260,
            height: multiline ? "auto" : 45
          }
        ]}
      >
        <TextInput
          selectionColor={colors.primary}
          secureTextEntry={password ? !isPasswordHidden : false}
          placeholder={placeholder}
          placeholderTextColor={colors.gray + "66"}
          style={[
            styles.inputStyle,
            {
              color: colors.black,
              textAlignVertical: multiline ? "top" : "auto",
              paddingVertical: multiline ? 10 : 0
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
            {isPasswordHidden ? <Eye /> : <EyeSlashed />}
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
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingRight: 5,
    paddingLeft: 2
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
    fontFamily: "Montserrat-Medium"
  },
  labelStyle: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium"
  }
});

export { Input };
