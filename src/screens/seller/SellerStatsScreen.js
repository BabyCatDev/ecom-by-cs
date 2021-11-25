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
  Currency,
  DateRangePickerModal
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchSellerStats } from "../../actions";

const SellerStatsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellerStats({ fromDate, toDate }));
  }, []);

  const [rangeModal, setRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [stats] = useSelector(({ deliveryData }) => [deliveryData.stats]);
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={rangeModal}>
        <DateRangePickerModal
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          close={() => setRangeModal(false)}
          submit={() => {
            dispatch(fetchSellerStats({ fromDate, toDate }));
            setRangeModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Mes\nstatistiques"}</Label>
        <View marginVertical={20} />
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
          onPress={() => setRangeModal(true)}
        >
          <Text style={[styles.text, { color: colors.gray }]}>
            {fromDate.length > 0 && toDate.length > 0
              ? `${dayjs(fromDate).format("YYYY-MM-DD")} - ${dayjs(
                  toDate
                ).format("YYYY-MM-DD")}`
              : `Aujourd'hui`}
          </Text>
        </Pressable>
        <View marginVertical={20} />
        <DeliveryStat
          title={"TOTAL DES COMMANDES"}
          value={stats.totalOrders || "0"}
          color={"#4D4A49"}
        />
        <DeliveryStat
          title={"LIVRAISONS EN ATTENTE"}
          value={stats.holdOrders || "0"}
          color={colors.primary}
        />
        <DeliveryStat
          title={"LIVRÉ AVEC SUCCÈS"}
          value={stats.succeedOrders || "0"}
          color={colors.green}
        />
        <DeliveryStat
          title={"ÉCHEC DE LIVRAISON"}
          value={stats.failedOrders || "0"}
          color={colors.red}
        />
        <DeliveryStat
          title={"REVENU RÉALISÉ"}
          value={stats.realizedIncome || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"REVENU MOYEN"}
          value={stats?.averageIncome?.toFixed(2) || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"REVENU POTENTIEL"}
          value={stats.potentialIncome || "0"}
          color={"#08AD8C"}
          currencySign
        />
        <DeliveryStat
          title={"MOYENNE POTENTIELLE"}
          value={stats?.potentialAverage?.toFixed(2) || "0"}
          color={"#08AD8C"}
          currencySign
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
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 29
  }
});

export default SellerStatsScreen;
