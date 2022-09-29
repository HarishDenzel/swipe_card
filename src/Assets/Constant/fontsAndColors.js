import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

const fontFamily = {
    Roboto_Regular: "Poppins-Regular",
    Poppins_Medium: "Poppins-Medium",
    Poppins_Bold: "Roboto-SemiBold",

   
}

const fontSize = {
  verySmall_50:
    Platform.OS == "android" ? (width / 100) * 2.5 : (width / 100) * 2.5,
  veryverySmall:
    Platform.OS == "android" ? (width / 100) * 2.7 : (width / 100) * 2.7,
  verySmall:
    Platform.OS == "android" ? (width / 100) * 2.9 : (width / 100) * 2.9,
  verySmall_75:
    Platform.OS == "android" ? (width / 100) * 3.1 : (width / 100) * 3.1,
  Small: Platform.OS == "android" ? (width / 100) * 3.3 : (width / 100) * 3.3,
  lightMedium_50:
    Platform.OS == "android" ? (width / 100) * 3.5 : (width / 100) * 3.3,
  lightMedium:
    Platform.OS == "android" ? (width / 100) * 3.7 : (width / 100) * 3.7,
  Medium: Platform.OS == "android" ? (width / 100) * 4.0 : (width / 100) * 4.2,
  Large_50:
    Platform.OS == "android" ? (width / 100) * 4.2 : (width / 100) * 4.5,
  Large: Platform.OS == "android" ? (width / 100) * 4.3 : (width / 100) * 4.7,
  ExtraLarge_50:
    Platform.OS == "android" ? (width / 100) * 4.7 : (width / 100) * 5,
  ExtraLarge:
    Platform.OS == "android" ? (width / 100) * 5.2 : (width / 100) * 6,
  ExLarge_2: Platform.OS == "android" ? (width / 100) * 6.0 : (width / 100) * 7,
};

const LG_BG_THEME = {
  LIGHTGREY_THEME: "#343434",
  DARKGREY_THEME: "#151515",
  WHITE_THEME: "#FFFFFF",
  LIGHTWHITE_THEME: "#898f8e",
  BLACK_THEME: "#000000",
  LW_THEME: "#f2f2f2",

  App_LBG: "#21409A",
  App_RED_1: "#ac2c2c",
  App_RED_2: "#dc5950",
  App_Button_1: "#bda782",
  App_Fontbalck: "#393939",

  App_BG: "#f0f5f8",

  App_Text_White: "#fff",
  App_Inactive: "#E8E8E8",
  App_Border: "#199ECF",

  App_Statusbar: "#14285a",
  App_Theme_Blue: "#264496",
  App_Orange: "#264496",

  App_Text_Blue: "#127aae",
  Border_Active: "#D9D9D9",
  App_Text_Header: "#4E4E4E",
  App_Text_Inactive: "#b5b3b3",

  QR_CodeBG: "#414141",
  APPTHEME_BG_2: "#f2f2f2",
  LIGHTGREY_THEME_2: "#E8F0FE",
};

const View_Spacing = {
  VS_W1: (height / 100) * 1,
  VS_W1_5: (height / 100) * 1.5,
  VS_W2: (height / 100) * 2,
  VS_W3: (height / 100) * 3,
  VS_W4: (height / 100) * 4,
  VS_W5: (height / 100) * 5,
  VS_W6: (height / 100) * 6,
  VS_W7: (height / 100) * 7,
  VS_W8: (height / 100) * 8,
  VS_W9: (height / 100) * 9,
  VS_W10: (height / 100) * 10,
  VS_W15: (height / 100) * 15,
  VS_W20: (height / 100) * 20,
};

const Basic_Viewdimension = {
  VD_BorderWidth: (width / 100) * 0.5,
  VD_Text_BorderWidth: (width / 100) * 0.3,
  VD_BorderRadius: (width / 100) * 3,
  VD_TextInput: (height / 100) * 6.5,
  VD_letterSpacing: (width / 100) * 0.2,
  VD_letterSpacing_2: (width / 100) * 0.1,
  Img_height: (height / 100) * 1.5,
  Img_width: (height / 100) * 1.5,
  Header_Radius: (width / 100) * 5,
  //VD_ButtonRadius: width / 100 * 10,

  VD_Marginleft_W1: (width / 100) * 1,

  Screen_Margin: (width / 100) * 2,

  Card_borderradius: (width / 100) * 2,
  Button_Height: (height / 100) * 4,

  Card_ImageLeft: (width / 100) * 7,
  Card_Buttonradius: (width / 100) * 3,

  Box_Padding: (width / 100) * 3,
  Text_Padding: (width / 100) * 1,
  Box_Opacity:
    Platform.OS == "android" ? (width / 100) * 1 : (width / 100) * 0.15,

  CenterButton_Height: (height / 100) * 6,
  FooterBox_Padding: (height / 100) * 6,

  lading_Padding: (width / 100) * 1,
  lading_Height: (height / 100) * 2,
  Search_Header: (height / 100) * 7,
};

export {
  fontSize,
  width,
  height,
  fontFamily,
  LG_BG_THEME,
  View_Spacing,
  Basic_Viewdimension,
};
