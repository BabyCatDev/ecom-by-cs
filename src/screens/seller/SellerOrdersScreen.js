import React, { useEffect, useState, useRef, useMemo } from "react";
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
  OrderBottomSheet,
  DateHeader
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
  const [selectedOrder, setSelectedOrder] = useState({});

  const [orders] = useSelector(({ orderData }) => [orderData.orders]);
  const sortedOrders = useMemo(() => {
    return [
      ...orders.filter(o => o.status === "Hold"),
      ...orders.filter(o => o.status === "Failed"),
      ...orders.filter(o => o.status === "Succeed")
    ];
  }, [orders]);

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
      <DateHeader
        setRangeModal={setRangeModal}
        fromDate={fromDate}
        toDate={toDate}
      />
      <View marginVertical={20} />
      <FlatList
        data={sortedOrders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("SellerCmdDetails", { item })}
            onLongPress={() => {
              if (!item.postponed) {
                sheetRef.current.openSheet();
                setSelectedOrder(item);
              }
            }}
            status={item.status}
            postponed={item.postponed}
            client={item.clientName}
            address={item.clientAddress} createdAt={item.createdAt}
            total={
              item.products.reduce(
                (acc, val) => acc + val.sellingPrice * val.quantity,
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
        reassignFunction={() => {
          sheetRef.current.closeSheet();
          navigate("ReassignOrder", { order: selectedOrder });
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SellerOrdersScreen;
