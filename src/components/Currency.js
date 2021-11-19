import React from "react";
import { Text } from "react-native";

const Currency = ({ bigger }) => {
  return <Text style={{ fontSize: bigger ? 16 : 13 }}>CFA</Text>;
};

export { Currency };
