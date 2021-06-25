import React from "react";
import {TouchableOpacity} from "react-native";
import {View, Text, Button, StyleSheet, ImageBackground} from "react-native";
import Progress3 from "../components/Progress3";
import Onboarding3 from './Onboarding3'

const Onboarding2 = ({navigation}) => {
    return (
        <View style={styles.onBoardingContainer}>
            <ImageBackground
                source={require("../../assets/Onboarding2.png")}
                style={styles.image}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titles}>Contribute to the</Text>
                <Text style={styles.titles}>environment</Text>
            </View>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>
                    While jogging, you can dump wastes
                </Text>
                <Text style={styles.subtitleText}>
                    to help the environment and be healthy
                </Text>
            </View>
            <View style={buttonStyle.container}>
                <Progress3
                    color1="rgba(255,255,255,0.5)"
                    color2="white"
                    color3="rgba(255,255,255,0.5)"
                />
                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigation.navigate(Onboarding3)}
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
    titleContainer:{
        marginTop: "10%",
        alignItems:'center'
    },
    titles: {
        fontSize: 25,
        fontWeight: "600",
        color: "#56CCF2",
        fontFamily: 'Quicksand_700Bold',
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
export default Onboarding2;
