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
  DateRangePickerModal
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminCompanyStats } from "../../actions";

const CompanyStatsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;

  const [rangeModal, setRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const companyId = route.params.item?._id;
  const companyName = route.params.item?.name;
  useEffect(() => {
    dispatch(fetchAdminCompanyStats({ companyId, fromDate, toDate }));
  }, []);

  const [companyStats] = useSelector(({ usersData }) => [
    usersData.companyStats
  ]);
  const conversionRate =
    (companyStats.succeedOrders / companyStats.totalOrders) * 100;
  const averageBasket =
    companyStats.turnoverRealized / companyStats.totalOrders;
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
            dispatch(fetchAdminCompanyStats({ companyId, fromDate, toDate }));
            setRangeModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{companyName}</Label>
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
          value={companyStats.totalOrders || "0"}
          color={"#4D4A49"}
        />
        <DeliveryStat
          title={"LIVRÉ AVEC SUCCÈS"}
          value={companyStats.succeedOrders || "0"}
          color={colors.green}
        />
        <DeliveryStat
          title={"ÉCHEC DE LIVRAISON"}
          value={companyStats.failedOrders || "0"}
          color={colors.red}
        />
        <DeliveryStat
          title={"TAUX DE CONVERSION"}
          value={(conversionRate ? conversionRate.toFixed(2) : 0) + "%"}
          color={colors.blue}
        />
        <DeliveryStat
          title={"REVENU RÉALISÉ"}
          value={companyStats.turnoverRealized || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"REVENU ÉCHOUÉ"}
          value={companyStats.failedTurnover || "0"}
          color={"#ff6347"}
          currencySign
        />
        <DeliveryStat
          title={"LIVRAISON MOYENNE"}
          value={averageBasket ? averageBasket.toFixed(2) : "0"}
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
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 29
  }
});

export default CompanyStatsScreen;
