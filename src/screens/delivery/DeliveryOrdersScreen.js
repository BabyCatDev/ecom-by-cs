import React, { useEffect } from "react";
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
  // orders?.sort((x, y) => {
  //   return x.status == "Hold" ? -1 : y.status == "Hold" ? 1 : 0;
  // })
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <FlatList
        data={orders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("DeliveryCmdDetails", { item })}
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
    </Container>
  );
};

const styles = StyleSheet.create({});

export default DeliveryOrdersScreen;
