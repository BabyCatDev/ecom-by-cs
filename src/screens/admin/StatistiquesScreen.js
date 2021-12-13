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
  DateHeader
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminStats } from "../../actions";
import { UserChecked, Truck, Bag, Buildings } from "../../icons";

const StatistiquesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;
  useEffect(() => {
    dispatch(fetchAdminStats({ fromDate, toDate }));
  }, []);

  const [stats] = useSelector(({ deliveryData }) => [deliveryData.stats]);
  const conversionRate = (stats.succeedOrders / stats.totalOrders) * 100;
  const conversionRateEntered =
    (stats.succeedOrders / stats.totalEnteredOrders) * 100;
  const averageBasket = stats.turnoverRealized / stats.succeedOrders;

  const daily = (stats.yesterdayOrders + stats.totalOrders) / 2;
  const [rangeModal, setRangeModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
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
            dispatch(fetchAdminStats({ fromDate, toDate }));
            setRangeModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Les\nStatistiques"}</Label>
        <View marginVertical={20} />
        <DateHeader
          setRangeModal={setRangeModal}
          fromDate={fromDate}
          toDate={toDate}
        />
        <View marginVertical={20} />
        <DeliveryStat
          title={"TOTAL DES COMMANDES"}
          value={stats.totalOrders}
          color={"#4D4A49"}
        />
        <DeliveryStat
          title={"TAUX DE CONVERSION"}
          value={(conversionRate ? conversionRate.toFixed(2) : 0) + "%"}
          color={colors.blue}
        />
        <DeliveryStat
          title={"TOTAL ENTRÉ"}
          value={stats.totalEnteredOrders}
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
          value={stats.holdOrders}
          color={colors.primary}
        />
        <DeliveryStat
          title={"LIVRÉ AVEC SUCCÈS"}
          value={stats.succeedOrders}
          color={colors.green}
        />
        <DeliveryStat
          title={"ÉCHEC DE LIVRAISON"}
          value={stats.failedOrders}
          color={colors.red}
        />
        <DeliveryStat
          title={"C.A RÉALISÉ"}
          value={stats.turnoverRealized || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"C.A A ÉCHOUÉ"}
          value={stats.failedTurnover || "0"}
          color={"#ff6347"}
          currencySign
        />
        <DeliveryStat
          title={"PANIER MOYEN"}
          value={averageBasket ? averageBasket.toFixed(2) : "0"}
          color={"#4D4A98"}
        />
        <DeliveryStat
          title={"MOYENNE DES COMMANDES"}
          value={stats?.averageDaily?.toFixed(2)}
          color={"#4D4A98"}
        />
        <DeliveryStat
          title={"LIVRAISONS QUOTIDIENNES"}
          value={(stats?.percentageDailyDeliveries?.toFixed(2) || 0) + "%"}
          color={"#4D4A98"}
        />
        <View marginVertical={20} />
        <View flexDirection={"row"}>
          <StatsButton
            onPress={() => navigate("UsersStats", { type: "Commercial" })}
            icon={() => <UserChecked marginLeft={8} />}
            color={colors.blue}
          >
            {"COMMERCIALS"}
          </StatsButton>
          <View marginHorizontal={3} />
          <StatsButton
            onPress={() => navigate("UsersStats", { type: "Livreur" })}
            icon={() => <Truck marginLeft={4} />}
            color={colors.green}
          >
            {"LIVREURS"}
          </StatsButton>
        </View>
        <View flexDirection={"row"}>
          <StatsButton
            onPress={() => navigate("ProductsStats")}
            icon={() => <Bag />}
            color={colors.gray}
          >
            {"PRODUITS"}
          </StatsButton>
          <View marginHorizontal={3} />
          <StatsButton
            onPress={() => navigate("CommercesStats")}
            icon={() => <Buildings />}
            color={colors.red}
          >
            {"ENTREPRISES"}
          </StatsButton>
        </View>
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

export default StatistiquesScreen;
