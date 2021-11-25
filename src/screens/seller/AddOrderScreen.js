import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable
} from "react-native";
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
  CustomDatePicker,
  ProductsSelectionModal
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, createOrder } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const AddOrderScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const companyName = route?.params?.companyName;
  const [clientName, setClientName] = useState("");
  const [clientPhones, setClientPhones] = useState([""]);
  const [clientAddress, setClientAddress] = useState("");
  const [comments, setComments] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState({});
  const [products, setProducts] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveriesModal, setDeliveriesModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [productsSelectionModal, setProductsSelectionModal] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [users] = useSelector(({ usersData }) => [usersData.users]);
  const deliveries = users?.filter(u => u.type === "Livreur");
  const deliveriesName = deliveries?.map(d => d.fullName);

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={deliveriesModal}>
        <SelectionModal
          items={deliveriesName || []}
          close={() => setDeliveriesModal(false)}
          value={deliveriesName}
          onSelect={val => {
            const foundDelivery = deliveries?.find(d => d.fullName === val);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={productsSelectionModal}
      >
        <ProductsSelectionModal
          close={() => setProductsSelectionModal(false)}
          products={products}
          setProducts={val => setProducts(val)}
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
            text={selectedDelivery?.fullName || "Choisir un livreur"}
            onPress={() => setDeliveriesModal(true)}
          />
          <Input
            label="Nom de client"
            placeholder="Nom de client"
            value={clientName}
            onChangeText={val => setClientName(val)}
          />
          {clientPhones.map((p, index1) => (
            <Input
              key={index1}
              label={`Téléphone (${index1 + 1})`}
              placeholder="01-23-45-56-78"
              value={p}
              onChangeText={val =>
                setClientPhones([
                  ...clientPhones.map((phone, index2) =>
                    index1 === index2 ? val : phone
                  )
                ])
              }
              keyboardType={"decimal-pad"}
            />
          ))}
          <View flexDirection={"row"}>
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.7 : 1, marginHorizontal: 10 }
              ]}
              onPress={() => setClientPhones([...clientPhones, ""])}
            >
              <Text style={[styles.btn, { color: colors.green }]}>
                AJOUTER PLUS
              </Text>
            </Pressable>
            {clientPhones.length > 1 && (
              <Pressable
                style={({ pressed }) => [
                  { opacity: pressed ? 0.7 : 1, marginHorizontal: 10 }
                ]}
                onPress={() => setClientPhones([...clientPhones.slice(0, -1)])}
              >
                <Text style={[styles.btn, { color: colors.red }]}>
                  SUPPRIMER
                </Text>
              </Pressable>
            )}
          </View>
          <Input
            label="Adresse de client"
            placeholder="Adresse de client"
            value={clientAddress}
            onChangeText={val => setClientAddress(val)}
            multiline
          />
          <Selector
            label="Date de livraison"
            text={dayjs(deliveryDate).format("YYYY-MM-DD")}
            onPress={() => setDateModal(true)}
          />
          <Selector
            label="Ajouter des produits"
            text={
              products.length > 0
                ? products.reduce((acc, p) => acc + p.name + " ", "")
                : "Ajouter des produits"
            }
            onPress={() => setProductsSelectionModal(true)}
          />
          <Input
            label="Comments"
            placeholder="Comments"
            value={comments}
            onChangeText={val => setComments(val)}
            multiline
          />
        </View>
        <View marginVertical={20} />
        <Button
          onPress={() =>
            dispatch(
              createOrder({
                deliveryDate,
                clientAddress,
                clientPhones,
                clientName,
                delivery: selectedDelivery._id,
                productsDetails: products,
                comments
              })
            )
          }
        >
          Ajouter
        </Button>
        <View marginVertical={20} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  },
  btn: {
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
    fontSize: 14
  }
});

export default AddOrderScreen;
