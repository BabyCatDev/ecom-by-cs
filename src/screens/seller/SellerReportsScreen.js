import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  DateRangePickerModal,
  DateHeader,
  CommandeRow,
  OrderBottomSheet,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSellerReports } from "../../actions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const SellerReportsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { navigate } = navigation;
  const [rangeModal, setRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const sheetRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSellerReports({ fromDate, toDate }));
  }, []);
  const [reports] = useSelector(({ orderData }) => [orderData.reports]);
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
            dispatch(getSellerReports({ fromDate, toDate }));
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
      <View marginVertical={10} />
      <FlatList
        data={reports}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CommandeRow
            onPress={() => navigate("SellerCmdDetails", { item })}
            onLongPress={() => {
              sheetRef.current.openSheet();
              setSelectedOrder(item);
            }}
            status={item.status}
            client={item.clientName}
            address={item.clientAddress}
            createdAt={item.createdAt}
            total={
              item.products
                .reduce((acc, val) => acc + val.sellingPrice * val.quantity, 0)
                .toLocaleString("en-US")
                .replace(/,/g, " ") + " CFA"
            }
            date={dayjs(item.deliveryDate).format("YYYY-MM-DD")}
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

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
  },
});

export default SellerReportsScreen;
