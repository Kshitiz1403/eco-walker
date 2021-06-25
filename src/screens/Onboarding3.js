import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import Progress3 from "../components/Progress3";
import Welcome from "./Welcome";

const Onboarding3 = ({ navigation }) => {
  return (
    <View style={styles.onBoardingContainer}>
      <ImageBackground
        source={require("../../assets/Onboarding3.png")}
        style={styles.image}
      />
      <Text style={styles.titles}>Have nice body</Text>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>
          Build better body and earth together with
        </Text>
        <Text style={styles.subtitleText}>our specialized features</Text>
      </View>
      <View style={buttonStyle.container}>
        <Progress3
          color1="rgba(255,255,255,0.5)"
          color2="rgba(255,255,255,0.5)"
          color3="white"
        />
        <TouchableOpacity
          style={buttonStyle.button}
          onPress={() => navigation.navigate(Welcome)}
        >
          <Text style={buttonStyle.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardingContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titles: {
    marginTop: "10%",
    fontSize: 25,
    fontWeight: "600",
    color: "#56CCF2",
    fontFamily: 'Quicksand_700Bold'
  },
  subtitle: {
    alignItems: "center",
    position: "absolute",
    bottom: "22.5%",
  },
  subtitleText: {
    color: "rgba(255,255,255,0.8)",
    fontFamily: 'Quicksand_400Regular'
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
});

const buttonStyle = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    marginTop: "10%",
    alignItems:'center'
  },
  button: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flex:1,
    width:'80%'
  },
  text: {
    fontSize: 17,
    // textTransform: "uppercase",
    color: "#56CCF2",
    fontFamily: 'Quicksand_700Bold'
  },
});
export default Onboarding3;
