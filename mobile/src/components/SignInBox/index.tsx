import React from "react";
import { useAuth } from "../../Hooks/Auth";
import { View } from "react-native";
import { COLORS } from "../../theme";

import { Button } from "../Button";
import { styles } from "./styles";

export function SignInBox() {
  const { signIn, isSigning } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        backgroundColor={COLORS.YELLOW}
        color={COLORS.BLACK_PRIMARY}
        icon="github"
        onPress={signIn}
        isLoading={isSigning}
      />
    </View>
  );
}
