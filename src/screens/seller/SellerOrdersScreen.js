import React, { useEffect, useState, useRef, useMemo } from "react";
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
  CommandeRow,
  AddButton,
  DateRangePickerModal,
  OrderBottomSheet,
  DateHeader,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSellerOrders } from "../../actions";
import dayjs from "dayjs";
import ButtonSet from "../../components/ButtonSet";
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
  const [selectedPart, setSelectedPart] = useState(1);
  const [length1, setLength1] = useState();
  const [length2, setLength2] = useState();
  const [length3, setLength3] = useState();

  const [orders] = useSelector(({ orderData }) => [orderData.orders]);
  const sortedOrders = useMemo(() => {
    return [
      ...orders.filter((o) => o.status === "Hold"),
      ...orders.filter((o) => o.status === "Failed"),
      ...orders.filter((o) => o.status === "Succeed"),
    ];
  }, [orders]);
  const filteredOrders = useMemo(() => {
    const tmp_filtered1 = [
      ...sortedOrders.filter(
        (o) => dayjs(o.deliveryDate).isSame(dayjs(o.createdAt), "day") == false
      ),
    ];
    const tmp_filtered2 = [
      ...sortedOrders.filter((o) =>
        dayjs(o.deliveryDate).isSame(dayjs(o.createdAt), "day")
      ),
    ];

    setLength1(sortedOrders.length);
    setLength2(tmp_filtered1.length);
    setLength3(tmp_filtered2.length);

    if (selectedPart === 1) {
      return sortedOrders;
    } else if (selectedPart === 3) {
      return tmp_filtered2;
    } else {
      return tmp_filtered1;
    }
  }, [selectedPart, sortedOrders]);

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
      <View marginVertical={10} />

      <ButtonSet
        selectedIndex={selectedPart}
        setSelectedIndex={(index) => setSelectedPart(index)}
        length1={length1}
        length2={length2}
        length3={length3}
      ></ButtonSet>
      <View marginVertical={10} />
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item._id}
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
            address={item.clientAddress}
            createdAt={item.createdAt}
            comments={item.comments}
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
