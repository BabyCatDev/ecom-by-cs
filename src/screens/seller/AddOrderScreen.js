import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  Button,
  Input,
  TypeEmploiModal,
  Selector,
  SelectionModal,
  CustomDatePicker
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const AddOrderScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const companyName = route?.params?.companyName;
  // const [entreprise, setEntreprise] = useState(companyName);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState({});
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveriesModal, setDeliveriesModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [users] = useSelector(({ usersData }) => [usersData.users]);
  const deliveries = users.filter(u => u.type === "Livreur");
  const deliveriesName = deliveries.map(d => d.fullName);

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={deliveriesModal}>
        <SelectionModal
          items={deliveriesName || []}
          close={() => setDeliveriesModal(false)}
          value={deliveriesName}
          onSelect={val => {
            const foundDelivery = deliveries.find(d => d.fullName === val);
            setSelectedDelivery(foundDelivery);
          }}
        />
      </Modal>
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
        <Label>{"Ajouter une\ncommande"}</Label>
        <View marginVertical={20} />
        <View alignItems={"center"}>
          <Selector
            label="Livreur"
            text={selectedDelivery?.fullName || "Choisir un livreur ici"}
            onPress={() => setDeliveriesModal(true)}
          />
          <Input
            label="Nom de client"
            placeholder="Nom de client"
            value={clientName}
            onChangeText={val => setClientName(val)}
          />
          <Input
            label="Téléphone de client"
            placeholder="Téléphone de client"
            value={clientPhone}
            onChangeText={val => setClientPhone(val)}
            keyboardType={"decimal-pad"}
          />
          <Input
            label="Adresse de client"
            placeholder="Adresse de client"
            value={clientAddress}
            onChangeText={val => setClientAddress(val)}
          />
          <Selector
            label="Date de livraison"
            text={dayjs(deliveryDate).format("YYYY-MM-DD")}
            onPress={() => setDateModal(true)}
          />
          <Selector
            label="Ajouter des produits"
            text={"Ajouter des produits"}
            onPress={() => null}
          />
        </View>
        <View marginVertical={20} />
        <Button onPress={() => null}>Ajouter</Button>
        <View marginVertical={20} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  }
});

export default AddOrderScreen;
