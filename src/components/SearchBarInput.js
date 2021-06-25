import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const SearchBarInput = (props) => {
  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={24} color="black" style={styles.icon} />
      {/* <Text style={styles.inputStyle}>{props.placeholder}</Text> */}
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="black"
        style={styles.inputStyle}
        value={props.term}
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 15,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 10,
  },
  inputStyle: {
    alignSelf: "center",
    flex: 1,
    marginStart: 15,
  },
  icon: {
    alignSelf: "center",
    marginStart: 5,
  },
});

export default SearchBarInput;
