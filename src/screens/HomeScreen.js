import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const HomeScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{color:'black'}}>Hello there</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
