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
import { getSellerFailedOrders } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerFailedOrdersScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const sheetRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerFailedOrders());
  }, []);
  const [selectedOrder, setSelectedOrder] = useState({});

  const [orders] = useSelector(({ orderData }) => [orderData.orders]);

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <View marginVertical={20} />
      <FlatList
        data={orders}
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
            address={item.clientAddress}
            client={item.clientName}
            total={
              item.products.reduce(
                (acc, val) => acc + val.sellingPrice * val.quantity,
                0
              ) + " CFA"
            }
            date={dayjs(item.deliveryDate).format("YYYY-MM-DD")}
            creationDate={dayjs(item.createdAt).format("YYYY-MM-DD")}
          />
        )}
      />
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

const styles = StyleSheet.create({});

export default SellerFailedOrdersScreen;
