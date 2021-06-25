import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, ImageBackground} from 'react-native'
import slides from "./slides";
import Progress3 from "./Progress3";

const OnboardingItems = ({item}) => {
    const {width} = useWindowDimensions();
    return (


        <View style={[styles.container, {width}]}>
            <ImageBackground source={item.image} style={[styles.image, {width}]}/>


                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.subtitle}>
                    <Text style = {styles.subtitleText}>{item.subtitle1}</Text>
                    <Text style = {styles.subtitleText}>{item.subtitle2}</Text>
                </View>

            {/*<View style={styles.buttonContainer}>*/}
            {/*    <Progress3*/}
            {/*        color1="white"*/}
            {/*        color2="rgba(255,255,255,0.5)"*/}
            {/*        color3="rgba(255,255,255,0.5)"*/}
            {/*    />*/}
            {/*</View>*/}

        </View>
    )
}

export default OnboardingItems

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    image: {
        // resizeMode: 'contain',
        // flex:1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    title: {
        textAlign:'center',
        marginTop: "10%",
        fontSize: 25,
        fontWeight: "600",
        color: "#56CCF2",
        fontFamily: 'Quicksand_700Bold'

    },
    subtitle: {
        alignItems: "center",
        position: "absolute",
        bottom: '20%',
    },
    subtitleText:{
        // color: 'black'
        color: "rgba(255,255,255,0.8)",
        fontSize: 16,
        fontFamily:'Quicksand_400Regular'
    },
    buttonContainer:{
        position:'absolute',
        bottom:'5%'
    }
})
