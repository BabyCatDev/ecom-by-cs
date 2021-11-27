import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Container,
  Label,
  TopBar,
  DeliveryStat,
  StatsButton
} from "../../components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminStats } from "../../actions";
import { UserChecked, Truck, Bag } from "../../icons";

const StatistiquesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = navigation;
  useEffect(() => {
    dispatch(fetchAdminStats());
  }, []);

  const [stats] = useSelector(({ deliveryData }) => [deliveryData.stats]);
  const conversionRate = (stats.succeedOrders / stats.totalOrders) * 100;
  const averageBasket = stats.turnoverRealized / stats.totalOrders;
  const succededBasket = stats.turnoverRealized / stats.succeedOrders;
  const daily = (stats.yesterdayOrders + stats.totalOrders) / 2;

  return (
    <Container containerstyle={{ margin: 0, marginTop: 0 }}>
      <ScrollView
        overScrollMode={"never"}
        contentContainerStyle={styles.scrollStyle}
      >
        <TopBar />
        <Label>{"Les\nStatistiques"}</Label>
        <View marginVertical={20} />
        <Text style={[styles.text, { color: colors.gray }]}>
          {dayjs(new Date()).format("YYYY-MM-DD")}
        </Text>
        <View marginVertical={20} />
        <DeliveryStat
          title={"TOTAL DES COMMANDES"}
          value={stats.totalOrders}
          color={"#4D4A49"}
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
          value={(conversionRate ? conversionRate.toFixed(2) : 0) + "%"}
          color={colors.blue}
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
          value={averageBasket.toFixed(2) || "0"}
          color={"#4D4A98"}
        />
        <DeliveryStat
          title={"MOYENNE DES COMMANDES"}
          value={succededBasket.toFixed(2) || "0"}
          color={"#4D4A98"}
        />
        <DeliveryStat
          title={"LIVRAISONS QUOTIDIENNES"}
          value={(daily.toFixed(2) || "0") + "%"}
          color={"#4D4A98"}
        />
        <View flexDirection={"row"}>
          <StatsButton
            onPress={() => navigate("UsersStats", { type: "Commercial" })}
            icon={() => <UserChecked marginLeft={8} />}
            color={colors.blue}
          >
            {"COMMERCIALS"}
          </StatsButton>
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
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 29
  }
});

export default StatistiquesScreen;
