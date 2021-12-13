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
import { fetchAdminSellerStats, fetchAdminDeliveryStats } from "../../actions";

const UserStatsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;

  const [rangeModal, setRangeModal] = useState(false);
  const [statsModal, setStatsModal] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const type = route.params.type;
  const userId = route.params.item?._id;
  const userName = route.params.item?.fullName;
  useEffect(() => {
    if (type === "Commercial") {
      dispatch(fetchAdminSellerStats({ userId, fromDate, toDate }));
    } else {
      dispatch(fetchAdminDeliveryStats({ userId, fromDate, toDate }));
    }
  }, []);

  const [userStats] = useSelector(({ usersData }) => [usersData.userStats]);
  const conversionRate =
    (userStats.succeedOrders / userStats.totalOrders) * 100;
  const averageBasket = userStats.turnoverRealized / userStats.totalOrders;
  const average = userStats.turnoverRealized / userStats.succeedOrders;

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <Modal animationType="slide" transparent={true} visible={statsModal}>
        <StatsModal
          title={"Pourcentage des entreprises"}
          items={userStats.percentageCompanies}
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
            if (type === "Commercial") {
              dispatch(fetchAdminSellerStats({ userId, fromDate, toDate }));
            } else {
              dispatch(fetchAdminDeliveryStats({ userId, fromDate, toDate }));
            }
            setRangeModal(false);
          }}
        />
      </Modal>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Pressable
          alignSelf={"flex-start"}
          onPress={() => type === "Commercial" && setStatsModal(true)}
        >
          <Label>{userName}</Label>
        </Pressable>
        <View marginVertical={20} />
        <DateHeader
          setRangeModal={setRangeModal}
          fromDate={fromDate}
          toDate={toDate}
        />
        <View marginVertical={20} />
        <Pressable
          onPress={() => {
            if (type === "Livreur")
              navigate("AdminDeliveryOrders", {
                fromDate,
                toDate,
                deliveryId: userId
              });
          }}
        >
          <DeliveryStat
            title={"TOTAL DES COMMANDES"}
            value={userStats.totalOrders || "0"}
            color={"#4D4A49"}
          />
        </Pressable>
        <DeliveryStat
          title={"LIVRAISONS EN ATTENTE"}
          value={userStats.holdOrders || "0"}
          color={colors.primary}
        />
        <DeliveryStat
          title={"LIVRÉ AVEC SUCCÈS"}
          value={userStats.succeedOrders || "0"}
          color={colors.green}
        />
        <DeliveryStat
          title={"ÉCHEC DE LIVRAISON"}
          value={userStats.failedOrders || "0"}
          color={colors.red}
        />
        <DeliveryStat
          title={"TAUX DE CONVERSION"}
          value={(conversionRate ? conversionRate.toFixed(2) : 0) + "%"}
          color={colors.blue}
        />
        <DeliveryStat
          title={"REVENU RÉALISÉ"}
          value={userStats.turnoverRealized || "0"}
          color={"#B7931F"}
          currencySign
        />
        <DeliveryStat
          title={"REVENU ÉCHOUÉ"}
          value={userStats.failedTurnover || "0"}
          color={"#ff6347"}
          currencySign
        />
        <DeliveryStat
          title={"LIVRAISON MOYENNE"}
          value={averageBasket ? averageBasket.toFixed(2) : "0"}
          color={"#4D4A98"}
        />
        {type === "Commercial" && (
          <DeliveryStat
            title={"PANIER MOYENNE"}
            value={average ? average.toFixed(2) : "0"}
            color={"#4D4A98"}
          />
        )}
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

export default UserStatsScreen;
