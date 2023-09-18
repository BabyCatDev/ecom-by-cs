import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CustomDatePicker,
  Input,
  Selector,
  Button,
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { updateObjective } from "../../actions";

const SellerSetObjectiveScreen = ({ route }) => {
  const { colors } = useTheme();
  const { id, obj, date } = route.params;
  const dispatch = useDispatch();

  const [dateModal, setDateModal] = useState(false);
  const [objective, setObjective] = useState(obj || 0);  
  const [deliveryDate, setDeliveryDate] = useState(date || new Date());

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={dateModal}>
        <CustomDatePicker
          value={dayjs(deliveryDate).format("YYYY-MM-DD")}
          close={() => setDateModal(false)}
          setValue={val => setDeliveryDate(val)}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Fixer\nun objectif"}</Label>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Input
            label="Fixer un objectif"
            placeholder={objective?String(objective):"Fixer un objectif"}
            value={objective}
            onChangeText={val => setObjective(val)}
          />
          <View marginVertical={20} />        
          <Selector
            label="Date objectif"
            text={dayjs(deliveryDate).format("YYYY-MM-DD")}
            onPress={() => setDateModal(true)}
          />
          <View marginVertical={20} />
        </View>
        <Button
            onPress={() => {
              let parsedObjective = parseInt(objective) || 0;
              dispatch(
                updateObjective({
                  id: id,
                  obj: parsedObjective,
                  date: deliveryDate
                })
              );
            }}
          >
            {"Set"}
          </Button>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
});

export default SellerSetObjectiveScreen;
