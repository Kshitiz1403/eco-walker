import React from "react";
import {TouchableOpacity} from "react-native";
import {View, Text, Button, StyleSheet, ImageBackground} from "react-native";
// import Onboarding2 from "./Onboarding2";
import Register from "./Register";
// import {useFonts} from "expo-font";
import Progress3 from "../components/Progress3";
import OnBoardContainer from "../components/OnBoardContainer";
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
// import SearchBarInput from "../components/SearchBarInput";
import AppLoading from "../components/AppLoading";

const Onboarding1 = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            // <OnBoardContainer imageSource={require("../../assets/Onboarding1.png")}
            //                   textHeading="Have a good health"
            //                   subHeading1="Being healthy is all, no health is nothing."
            //                   subHeading2="So why don't we jog!!!"
            //                   navigateTo='Onboarding2'
            //                   buttonText='Next'/>

            <View style={styles.onBoardingContainer}>
                <ImageBackground
                    source={require("../../assets/Onboarding1.png")}
                    style={styles.image}
                />

                <Text style={styles.titles}>Have a good health</Text>

                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>
                        Being healthy is all, no health is nothing.
                    </Text>
                    <Text style={styles.subtitleText}>So why don't we jog!!!</Text>
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
                        <Text style={buttonStyle.text}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
export default Onboarding1;
