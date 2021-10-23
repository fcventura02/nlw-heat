import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    marginRight: 20,
  },
});
