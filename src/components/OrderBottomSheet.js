import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Edit, Delete } from "../icons";

const OrderBottomSheet = forwardRef((props, ref) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { navigate } = navigation;
  const refRBSheet = useRef(null);
  const { editFunction, deleteFunction } = props;
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
      height={120}
      ref={refRBSheet}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "transparent"
        },
        container: {
          ...styles.container,
          backgroundColor: colors.white,
          borderColor: "#BABABA"
        }
      }}
    >
      <Pressable
        onPress={() => editFunction()}
        style={({ pressed }) => [styles.item, { opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={[styles.textItem, { color: colors.black }]}>Modifier</Text>
        <Edit />
      </Pressable>
      {/* <Pressable
        onPress={() => deleteFunction()}
        style={({ pressed }) => [styles.item, { opacity: pressed ? 0.7 : 1 }]}
      >
        <Text style={[styles.textItem, { color: colors.red }]}>Supprimer</Text>
        <View
          width={22}
          height={22}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Delete />
        </View>
      </Pressable> */}
    </RBSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderTopWidth: 1
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textItem: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18
  }
});

export { OrderBottomSheet };
