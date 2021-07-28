import React, {useRef, useMemo} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Pressable, Button} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import Map from '../components/Map'
import LocationCard from "../components/LocationCard";
import {useNavigation, useRoute} from "@react-navigation/native";
import BottomSheet from '@gorhom/bottom-sheet';

import RBSheet from "react-native-raw-bottom-sheet";



const Directions = () => {


    const navigation = useNavigation()
    const route = useRoute()
    // console.log(route.params)

    const details = route.params
    // const refRBSheet = useRef();

    // console.log(details['geometry']['location']['lat'])
    //
    // const lat = details.geometry.location.lat;

    // const lng = details.geometry.location.lng;
    //
    // console.log(lat)
    // const snapPoints = useMemo(() => ['1%', '20%'], []);
const snapPoints=['1%','20%','60%']

    return (

        <View style={{flex: 1}}>

            {/* Map */}
            <Map/>


            <View style={styles.backgroundStyle}>
                {/* Back Button */}
                <TouchableOpacity onPress = {()=>{navigation.navigate('SearchScreen')}}>
                    <FontAwesome name="arrow-left" size={24} color="black"/>
                </TouchableOpacity>
            </View>

            {/*<View style={styles.locationContainer}>*/}
            {/*    <LocationCard locationName = "Location Name"/>*/}
            {/*</View>*/}

            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                // onChange={handleSheetChanges}
            >
                <View style={styles.locationContainer}>
                    <LocationCard locationName = "Location Name"/>
                </View>
                {/*<View style={styles.contentContainer}>*/}
                {/*    <Text>Awesome 🎉</Text>*/}
                {/*</View>*/}
            </BottomSheet>


        </View>
    )
}

export default Directions

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
    locationContainer: {
        position: 'absolute',
        // bottom: 0,
        // left: 0,
        // flex: 1,
        width: '100%',
        // height:'30%'
        // height: '50%',
    },
    contentContainer:{

    }

});