import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Container, Label, TopBar, DeliveryStat } from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeliveryStats } from "../../actions";

const DeliveryStatsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeliveryStats());
  }, []);

  const [stats] = useSelector(({ deliveryData }) => [deliveryData.stats]);
  const conversionRate = (stats.succeedOrders / stats.totalOrders) * 100;
  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Mes\nstatistiques"}</Label>
        <View marginVertical={20} />
        <Text style={[styles.text, { color: colors.gray }]}>
          {dayjs(new Date()).format("YYYY-MM-DD")}
        </Text>
        <View marginVertical={20} />
        <DeliveryStat
          title={"LIVRAISONS TOTALES"}
          value={stats.totalOrders}
          color={"#4D4A49"}
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
          title={"TAUX DE CONVERSION"}
          value={conversionRate.toFixed(2) + "%"}
          color={colors.blue}
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

export default DeliveryStatsScreen;
