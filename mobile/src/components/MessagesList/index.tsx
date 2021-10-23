import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { api } from "../../services/api";
import { Message, MessageProps } from "../Message";
import { styles } from "./styles";

export function MessagesList() {
  const [currentMessages, SetCurrentMessages] = useState<MessageProps[]>([]);
  useEffect(() => {
    async function fetchMessages() {
      const messagesRersponse = await api.get<MessageProps[]>(
        "/messages/last3"
      );
      SetCurrentMessages(messagesRersponse.data);
    }
    fetchMessages();
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
