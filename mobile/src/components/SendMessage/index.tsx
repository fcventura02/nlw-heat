import React, { useState } from "react";
import { Alert, Keyboard, TextInput, View } from "react-native";
import { api } from "../../services/api";
import { COLORS } from "../../theme";

import { Button } from "../Button";
import { styles } from "./styles";

export function SendMessage() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessagesSubmit() {
    const messageFormatted = message.trim();
    try {
      if (messageFormatted.length > 0) {
        setSendingMessage(true);
        await api.post("messages", { message: messageFormatted });
        setMessage("");
        Keyboard.dismiss();
        Alert.alert("Menssagem enviada com sucesso!");
      } else {
        Alert.alert("Escreva uma menssagem para enviar");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSendingMessage(false);
    }
  }

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
        onPress={handleMessagesSubmit}
      />
    </View>
  );
}
