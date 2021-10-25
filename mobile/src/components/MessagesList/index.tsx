import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { api } from "../../services/api";
import io from "socket.io-client";
import { Message, MessageProps } from "../Message";
import { styles } from "./styles";

let messageQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newmessages) => {
  messageQueue.push(newmessages);
});

export function MessagesList() {
  const [currentMessages, SetCurrentMessages] = useState<MessageProps[]>([]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        SetCurrentMessages((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ]);
      }
      messageQueue.shift();
    }, 3000);
    return () => clearInterval(timer);
  }, []);
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
