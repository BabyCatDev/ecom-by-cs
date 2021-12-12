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
  DateHeader,
  Input
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
  const [search, setSearch] = useState("");

  const [orders] = useSelector(({ orderData }) => [orderData.orders]);
  const filteredOrders = useMemo(() => {
    return orders.filter(
      o => o.clientName.includes(search) || o.clientAddress.includes(search)
    );
  }, [search]);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <View alignItems={"center"}>
        <Input
          label="Chercher :"
          placeholder="Nom de client, address"
          value={search}
          onChangeText={val => setSearch(val)}
        />
      </View>
      <View marginVertical={20} />
      <FlatList
        data={search.length > 0 ? filteredOrders : orders}
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
