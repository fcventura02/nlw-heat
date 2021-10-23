import React from "react";
import { View } from "react-native";
import { COLORS } from "../../theme";

import { Button } from "../Button";
import { styles } from "./styles";

export function SignInBox() {
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        backgroundColor={COLORS.YELLOW}
        color={COLORS.BLACK_PRIMARY}
        icon="github"
      />
    </View>
  );
}
