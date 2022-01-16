import { signOut } from "firebase/auth";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { auth } from "../utils/firebase";
import SwopButton from "../components/atoms/SwopButton";
import headers from "../styles/headers";
import { useGlobalContext } from "../utils/context";

const SettingScreen = ({ navigation }) => {
  const { curUser } = useGlobalContext();
  
  const logout = () => {
    signOut(auth).then(navigation.navigate("Login"));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={headers.h1}>
        @{curUser.username}
      </Text>
      <SwopButton title={'Logout'} onPress={logout}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 }
})

export default SettingScreen;
