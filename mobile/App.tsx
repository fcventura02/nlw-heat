import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";
import { AuthProvider } from "./src/Hooks/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
      <StatusBar style="light"  translucent backgroundColor="transparent"/>
    </>
  );
}
