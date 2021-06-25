import React from "react";
import {TouchableOpacity} from "react-native";
import {View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import Progress2 from "../components/Progress2";
import Login from "./Login";

const Welcome = ({navigation}) => {
    return (
        <View style={styles.onBoardingContainer}>
            <Text style={styles.titles}>Step 1 of 2</Text>
            <Image
                source={require("../../assets/running-people.png")}
                style={styles.image}
            />

                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Welcome to</Text>
                    <Text style={styles.welcomeText}>SUDARSHAN</Text>
                </View>

                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>
                        {/*This is some shit that I'll be talking about*/}
                        Our app is based on the concept of plogging and helps to calculate calories burnt
                    </Text>
                </View>

            {/* Button */}
            <View style={buttonStyle.container}>
                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigation.navigate(Login)}
                >
                    <Text style={buttonStyle.text}>Get Started</Text>
                </TouchableOpacity>
                <Progress2 color1="#56CCF2" color2="#949397" color3="#949397"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    onBoardingContainer: {
        flex: 1,
    },
    titles: {
        alignSelf: "center",
        marginTop: "10%",
        fontSize: 25,
        fontWeight: "600",
        color: "#56CCF2",
        fontFamily: 'Quicksand_700Bold'
    },
    image: {
        width: '100%',
        resizeMode: "contain",
        flex: 0.7
    },

    welcome: {
        marginVertical: 10,
        alignItems: "center",
        marginBottom: 25
    },
    welcomeText: {
        textAlign:'center',
        color: "gray",
        fontSize: 22.5,
        fontFamily: 'Quicksand_700Bold'
    },
    subtitle: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "15%",
    },
    subtitleText: {
        textAlign:'center',
        fontWeight: '100',
        color: 'black',
        fontFamily: 'Quicksand_400Regular',
    },
});

const buttonStyle = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        width: "100%",
        marginTop: "10%",
        alignItems: 'center'
    },
    button: {
        backgroundColor: "#56CCF2",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flex: 1,
        width: '80%'
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        fontFamily: 'Quicksand_700Bold'
    },
});
export default Welcome;
