import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  SelectionModal,
  Selector,
  Button
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, reassignOrder } from "../../actions";

const ReassignOrderScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const orderId = route.params.order._id;
  const [users] = useSelector(({ usersData }) => [usersData.users]);
  const sellers = users?.filter(u => u.type === "Commercial");
  const sellersNames = sellers?.map(d => d.fullName);
  const [sellersModal, setSellersModal] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState();
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <Modal animationType="slide" transparent={true} visible={sellersModal}>
        <SelectionModal
          items={sellersNames || []}
          close={() => setSellersModal(false)}
          value={sellersNames}
          onSelect={val => {
            const foundSeller = sellers?.find(d => d.fullName === val);
            setSelectedSeller(foundSeller);
          }}
        />
      </Modal>
      <TopBar />
      <Label>Réaffectation</Label>
      <View marginVertical={20} />
      <View flex={1} justifyContent={"space-around"} alignItems={"center"}>
        <Selector
          label="Commercial"
          text={selectedSeller?.fullName || "Choisir un commercial"}
          onPress={() => setSellersModal(true)}
        />
        <Button
          onPress={() => {
            dispatch(reassignOrder({ orderId, newSeller: selectedSeller._id }));
          }}
        >
          Réaffecter
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default ReassignOrderScreen;
