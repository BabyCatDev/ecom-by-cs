import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  CommandeRow,
  AddButton
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getDeliveryOrders } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const DeliveryOrdersScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeliveryOrders());
  }, []);

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
      <TopBar />
      <FlatList
        data={sortedOrders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("DeliveryCmdDetails", { item })}
            status={item.status}
            postponed={item.postponed}
            client={item.clientName}
            address={item.clientAddress}
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
    </Container>
  );
};

const styles = StyleSheet.create({});

export default DeliveryOrdersScreen;
