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
import { getOrders } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerOrdersScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const [orders] = useSelector(({ orderData }) => [orderData.orders]);
  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <FlatList
        data={orders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("SellerCmdDetails", { item })}
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
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SellerOrdersScreen;
