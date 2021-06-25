import React from 'react'
import {useState} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity,} from 'react-native'
import slides from "../components/slides";
import OnboardingItems from "../components/OnboardingItems";
import Dots from 'react-native-dots-pagination';

import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import AppLoading from "../components/AppLoading";
import Progress3 from "../components/Progress3";

const Onboarding = () => {
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
            <View style={styles.container}>
                <FlatList
                    // ref={ref => (this.flatlist = ref)}
                    data={slides}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    // bounces={false}
                    renderItem={({item}) => <OnboardingItems item={item}/>}
                />
                <View style={{
                    position: 'absolute',
                    bottom: '10%',
                    alignSelf: 'center'
                }}>
                    <Progress3
                        color1="white"
                        color2="rgba(255,255,255,0.5)"
                        color3="rgba(255,255,255,0.5)"
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={() => this.flatlist.scrollToIndex({ index: 0 })}
                    // onPress={() => navigation.navigate('Onboarding2')}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
                {/*</View>*/}
            </View>
        )
    }
}

export default Onboarding
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
        // position:'absolute',
        // alignSelf:'center'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    button: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        position: 'absolute',
        bottom: '5%'
    },
    buttonText: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#56CCF2',
        fontFamily: 'Quicksand_700Bold'
    }
})
