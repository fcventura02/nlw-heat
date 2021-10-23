import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 14,
  },
});
