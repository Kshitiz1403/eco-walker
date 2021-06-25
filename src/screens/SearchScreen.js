import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import SearchBarInput from "../components/SearchBarInput";
import StartEndNavigation from "../components/StartEndNavigation";
import GooglePlacesInput from "../components/GooglePlaces";
import Directions from "./Directions";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.backgroundStyle}>

        {/* Back Arrow */}
        <TouchableOpacity onPress = {()=>{navigation.navigate('RunningMap')}}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        {/* SearchBar */}
        <SearchBarInput
          placeholder={"Enter Destination"}
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={console.log({ term })}
        />
      </View>
      <Text>{term}</Text>

      {/* Navigate Button */}
      <TouchableOpacity
          style={styles.navigationButton}
          onPress = {()=>navigation.navigate(Directions, {})}
      >
        <StartEndNavigation
          source={require("../../assets/StartNavigation.png")}
        />
      </TouchableOpacity>

      {/* Google Places Auto Complete */}
      <GooglePlacesInput />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginStart: 10,
  },
  navigationButton: {
    position: "absolute",
    bottom: 0,
    right: 5,
  },
});
export default SearchScreen;
