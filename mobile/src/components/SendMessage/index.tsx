import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { COLORS } from "../../theme";

import { Button } from "../Button";
import { styles } from "./styles";

export function SendMessage() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua espectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />
      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
      />
    </View>
  );
}
