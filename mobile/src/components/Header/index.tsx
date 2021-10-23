import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/fcventura02.png" />
      </View>
    </View>
  );
}