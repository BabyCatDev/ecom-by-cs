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
import { getAdminDeliveryOrders } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const AdminDeliveryOrdersScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const deliveryId = route.params.deliveryId;
  const fromDate = route.params.fromDate;
  const toDate = route.params.toDate;
  useEffect(() => {
    dispatch(getAdminDeliveryOrders({ deliveryId, fromDate, toDate }));
  }, []);

  const [deliveryOrders] = useSelector(({ usersData }) => [
    usersData.deliveryOrders
  ]);

  return (
    <Container containerstyle={{ paddingHorizontal: 10 }}>
      <TopBar />
      <FlatList
        data={deliveryOrders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("CmdDetails", { item })}
            status={item.status}
            postponed={item.postponed}
            client={item.clientName}
            address={item.clientAddress} createdAt={item.createdAt}
            updated={item.updated}
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

export default AdminDeliveryOrdersScreen;
