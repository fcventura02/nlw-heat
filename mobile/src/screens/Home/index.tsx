import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "../../components/Header";
import { MessagesList } from "../../components/MessagesList";
import { styles } from "./styles";
import { SignInBox } from "../../components/SignInBox";
import { SendMessage } from "../../components/SendMessage";
import { useAuth } from "../../Hooks/Auth";

export function Home() {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessagesList />
        {user ? <SendMessage /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}
