import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FDFBF9",
    primary: "#F66C16",
    secondary: "#E9CB69",
    white: "#FFFFFF",
    gray: "#4D4A49",
    black: "#383636"
  }
};

export default MyTheme;
