import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const StartEndNavigation = (props) => {
  return <Image source={props.source} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 161,
    height: 90,
  },
});

export default StartEndNavigation;
