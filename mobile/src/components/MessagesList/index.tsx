import React from "react";
import { ScrollView } from "react-native";
import { Message } from "../Message";
import { styles } from "./styles";

export function MessagesList() {
  const message = {
    id: "sdfsdg124",
    text: "string",
    user: { name: "string", avatar_url: "" },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
