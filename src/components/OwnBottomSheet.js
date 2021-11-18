import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
// import { LinearGradient } from "expo-linear-gradient";
// import { Out, AddUser, Highfive, Block } from "../icons";

const OwnBottomSheet = forwardRef((props, ref) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const refRBSheet = useRef(null);

  useImperativeHandle(ref, () => ({
    openSheet() {
      refRBSheet.current.open();
    },
    closeSheet() {
      refRBSheet.current.close();
    }
  }));
  return (
    <RBSheet
      height={230}
      ref={refRBSheet}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent"
        }
      }}
    ></RBSheet>
  );
});

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingHorizontal: 30,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center"
  },
  textItem: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    paddingHorizontal: 20
  }
});

export { OwnBottomSheet };
