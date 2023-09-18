import Constants from "expo-constants";
import { Platform } from "react-native";
import { BASE_URL_PRODUCTION, BASE_URL_STAGING } from "@env";

const getEnvVars = (env = "") => {
  if (env === null || env === undefined || env === "") return "staging";
  if (env.indexOf("dev") !== -1) return "staging";
  // if (env.indexOf("staging") !== -1) return "staging";
  if (env.indexOf("prod") !== -1) return "production";
};

export const releaseEnvironment = getEnvVars(Constants.manifest.releaseChannel);

export const getApiUrl = () => {
  let api_url = BASE_URL_STAGING;
  if (releaseEnvironment == "production") {
    api_url = BASE_URL_PRODUCTION;
  } else {
    api_url = BASE_URL_STAGING;
  }
  return api_url;
};
