import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { render } from "react-dom";
// import { FlatList } from "react-native";

const Progress3 = (props) => {
  return (
    <View style={styles.iconsView}>
      <FontAwesome
        name="circle"
        style={styles.icon}
        size={13}
        color={props.color1}
      />
      <FontAwesome
        name="circle"
        style={styles.icon}
        size={13}
        color={props.color2}
      />
      <FontAwesome
        name="circle"
        style={styles.icon}
        size={13}
        color={props.color3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsView: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default Progress3;
