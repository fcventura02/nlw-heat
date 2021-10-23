import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { MessagesList } from "../../components/MessagesList";
import { styles } from "./styles";
import { SignInBox } from "../../components/SignInBox";
import { SendMessage } from "../../components/SendMessage";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessagesList />
      <SendMessage />
    </View>
  );
}
