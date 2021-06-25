import React from "react";
import {TouchableOpacity} from "react-native";
import {View, Text, Button, StyleSheet, ImageBackground} from "react-native";
import Progress3 from "./Progress3";


// import {na}

import Onboarding2 from "../screens/Onboarding2";


const OnBoardContainer = (props, {navigation}) => {
    return (
        <View style={styles.onBoardingContainer}>
            <ImageBackground
                source={props.imageSource}
                style={styles.image}
            />
            <Text style={styles.titles}>
                {props.textHeading}
            </Text>
            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>
                    {props.subHeading1}
                </Text>
                <Text style={styles.subtitleText}>
                    {props.subHeading2}
                </Text>
            </View>

            <View style={buttonStyle.container}>
                <Progress3
                    color1="white"
                    color2="rgba(255,255,255,0.5)"
                    color3="rgba(255,255,255,0.5)"
                />

                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigation.navigate('Onboarding2')}
                >
                    <Text style={buttonStyle.text}>
                        {props.buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default OnBoardContainer

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
    },
    subtitle: {
        alignItems: "center",
        position: "absolute",
        bottom: "22.5%",
    },
    subtitleText: {
        color: "rgba(255,255,255,0.8)",
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
        padding: 30,
        marginTop: "10%",
    },
    button: {
        backgroundColor: "white",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        textTransform: "uppercase",
        color: "#56CCF2",
    },
});
