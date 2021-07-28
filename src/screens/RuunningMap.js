import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import StartEndNavigation from "../components/StartEndNavigation";
import SearchBar from "../components/SearchBar";
import SearchScreen from "./SearchScreen";
import Map from '../components/Map'


const RunningMap = ({ navigation }) => {
  return (
    <View style={{}}>

      <Map />

      <View style={styles.backgroundStyle}>
        {/* Hamburger Touchable Opacity */}
        <TouchableOpacity onPress = {()=>{navigation.toggleDrawer()}} style={{paddingHorizontal:10}}>
          <FontAwesome name="navicon" size={24} color="black" />
        </TouchableOpacity>

        {/* SearchBar */}
        <Pressable style={{ flex: 1,flexDirection: "row", }} onPress={() => navigation.navigate(SearchScreen)}>
          <SearchBar placeholder={"Where are you going to?"} />
        </Pressable>
      </View>



      {/* Navigation Button to start or end navigation */}


      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate(SearchScreen)}>
        <StartEndNavigation
          source={require("../../assets/StartNavigation.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    position: 'absolute',
    top: '7.5%',
    left: 0,
    // marginTop: 50,
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

export default RunningMap;
