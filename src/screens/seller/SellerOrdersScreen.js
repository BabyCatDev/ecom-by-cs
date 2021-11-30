import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandeRow,
  AddButton,
  DateRangePickerModal,
  OrderBottomSheet
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSellerOrders } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerOrdersScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const sheetRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerOrders({ fromDate, toDate }));
  }, []);
  const [rangeModal, setRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [orders] = useSelector(({ orderData }) => [orderData.orders]);
  const [selectedOrder, setSelectedOrder] = useState({});
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <Modal animationType="slide" transparent={true} visible={rangeModal}>
        <DateRangePickerModal
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          close={() => setRangeModal(false)}
          submit={() => {
            dispatch(getSellerOrders({ fromDate, toDate }));
            setRangeModal(false);
          }}
        />
      </Modal>
      <TopBar />
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        onPress={() => setRangeModal(true)}
      >
        <Text style={[styles.text, { color: colors.gray }]}>
          {fromDate.length > 0 && toDate.length > 0
            ? `${dayjs(fromDate).format("YYYY-MM-DD")} - ${dayjs(toDate).format(
                "YYYY-MM-DD"
              )}`
            : `Aujourd'hui`}
        </Text>
      </Pressable>
      <FlatList
        data={orders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("SellerCmdDetails", { item })}
            onLongPress={() => {
              sheetRef.current.openSheet();
              setSelectedOrder(item);
            }}
            status={item.status}
            client={item.clientName}
            total={
              item.products.reduce(
                (acc, val) => acc + val.product.price * val.quantity,
                0
              ) + " CFA"
            }
            date={dayjs(item.deliveryDate).format("YYYY-MM-DD")}
          />
        )}
      />
      <AddButton onPress={() => navigate("AddOrder")}>Ajouter</AddButton>
      <OrderBottomSheet
        ref={sheetRef}
        editFunction={() => {
          sheetRef.current.closeSheet();
          navigate("AddOrder", { order: selectedOrder });
        }}
        deleteFunction={() => null}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40
  }
});

export default SellerOrdersScreen;
