import React from 'react'
import { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native'
import slides from "../components/slides";
import OnboardingItems from "../components/OnboardingItems";
import Dots from 'react-native-dots-pagination';
import Paginator from '../components/Paginator';

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

    const [currentIndex, setCurrentIndex] = useState(0)

    const viewableItemsChanged = useRef(({ viewableItems }) => { setCurrentIndex(viewableItems[0].index) }).current

    const scrollX = useRef(new Animated.Value(0)).current

    const viewConfig = useRef({
        viewAreaCoveragePercentThreshold: 50
    }).current;

    const slidesRef = useRef(null)



    if (!fontsLoaded) {
        return <AppLoading />;
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
                    renderItem={({ item }) => <OnboardingItems item={item} />}

                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}

                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}

                />
                <View style={{position:'absolute', bottom:'5%'}}>
                <Paginator data = {slides} scrollX={scrollX}/>
                </View>




                {/* <View style={{
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
                </TouchableOpacity> */}
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
