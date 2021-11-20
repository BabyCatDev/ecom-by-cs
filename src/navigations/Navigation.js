import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as RootNavigation from "./RootNavigation";
import AppLoading from "expo-app-loading";
import AuthStack from "./AuthStack";
import AdminStack from "./AdminStack";
import SellerStack from "./SellerStack";
// import DeliveryStack from "./DeliveryStack";
import MyTheme from "../Colors";
import { useSelector } from "react-redux";
import apiInstance from "../actions/Base";
import * as SecureStore from "expo-secure-store";

export const getItem = async value => {
  let result = await SecureStore.getItemAsync(value);
  return result;
};

const Navigation = () => {
  const [token, setToken] = useState("");
  const [type, setType] = useState("");
  const [Loading, setLoading] = useState(false);
  const [isTokenChanged] = useSelector(({ auth }) => [auth.isTokenChanged]);
  const gettingTokenAndSettingApiInstance = async () => {
    try {
      const token = await getItem("token");
      setToken(token);
      apiInstance.defaults.headers.common = {
        Authorization: "Bearer " + token
      };
      const typeValue = await getItem("type");
      setType(typeValue);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    gettingTokenAndSettingApiInstance();
  }, []);

  if (Loading) {
    return <AppLoading />;
  }
  if (isTokenChanged) {
    gettingTokenAndSettingApiInstance();
  }
  return (
    <NavigationContainer theme={MyTheme} ref={RootNavigation.navigationRef}>
      {token ? (
        type === "Administrateur" ? (
          <AdminStack />
        ) : type === "Commercial" ? (
          <SellerStack />
        ) : (
          <SellerStack />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
