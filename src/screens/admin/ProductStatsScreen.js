import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  DeliveryStat,
  StatsButton,
  DateRangePickerModal,
  DateHeader,
  StatsModal
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminProductStats } from "../../actions";

const ProductStatsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;

  const [rangeModal, setRangeModal] = useState(false);
  const [statsModal, setStatsModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const productId = route.params.item?._id;
  const productName = route.params.item?.name;
  useEffect(() => {
    dispatch(fetchAdminProductStats({ productId, fromDate, toDate }));
  }, []);

  const [productStats] = useSelector(({ usersData }) => [
    usersData.productStats
  ]);
  const conversionRate =
    (productStats.succeedOrders / productStats.totalOrders) * 100;

  const conversionRateEntered =
    (productStats.succeedOrders / productStats.totalEnteredOrders) * 100;
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={statsModal}>
        <StatsModal
          title={"Pourcentage des commercials"}
          items={productStats.percentageSellers}
          close={() => setStatsModal(false)}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={rangeModal}>
        <DateRangePickerModal
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          close={() => setRangeModal(false)}
          submit={() => {
            dispatch(fetchAdminProductStats({ productId, fromDate, toDate }));
            setRangeModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Pressable alignSelf={"flex-start"} onPress={() => setStatsModal(true)}>
          <Label>{productName}</Label>
        </Pressable>
        <View marginVertical={20} />
        <DateHeader
          setRangeModal={setRangeModal}
          fromDate={fromDate}
          toDate={toDate}
        />
        <View marginVertical={20} />
        <DeliveryStat
          title={"TOTAL DES COMMANDES"}
          value={productStats.totalOrders || "0"}
          color={"#4D4A49"}
        />
        <DeliveryStat
          title={"TAUX DE CONVERSION"}
          value={(conversionRate ? conversionRate.toFixed(2) : 0) + "%"}
          color={colors.blue}
        />
        <DeliveryStat
          title={"TOTAL ENTRÉ"}
          value={productStats.totalEnteredOrders}
          color={"#4D4A49"}
        />
        <DeliveryStat
          title={"TAUX DE CONVERSION"}
          value={
            (conversionRateEntered ? conversionRateEntered.toFixed(2) : 0) + "%"
          }
          color={colors.blue}
        />
        <DeliveryStat
          title={"LIVRAISONS EN ATTENTE"}
          value={productStats.holdOrders || "0"}
          color={colors.primary}
        />
        <DeliveryStat
          title={"LIVRÉ AVEC SUCCÈS"}
          value={productStats.succeedOrders || "0"}
          color={colors.green}
        />
        <DeliveryStat
          title={"ÉCHEC DE LIVRAISON"}
          value={productStats.failedOrders || "0"}
          color={colors.red}
        />
        <DeliveryStat
          title={"REVENU RÉALISÉ"}
          value={productStats.turnoverRealized || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"REVENU ÉCHOUÉ"}
          value={productStats.failedTurnover || "0"}
          color={"#ff6347"}
          currencySign
        />
        <DeliveryStat
          title={"MOYENNE DES COMMANDES"}
          value={productStats?.averageDaily?.toFixed(2)}
          color={"#4D4A98"}
        />
        <DeliveryStat
          title={"LIVRAISONS QUOTIDIENNES"}
          value={
            (productStats?.percentageDailyDeliveries?.toFixed(2) || 0) + "%"
          }
          color={"#4D4A98"}
        />
        <View marginVertical={20} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: 25,
    paddingTop: 30
  }
});

export default ProductStatsScreen;
