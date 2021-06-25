import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { MapStyle } from './MapStyle';
// import { Marker_Data } from './Marker_Data'

const Map = () => {
    return <MapView
        // customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: 26.8770109,
            longitude: 75.77420570000001,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }} style={styles.map}
        // customMapStyle={MapStyle} 
        >

        <Marker
            coordinate={{
                latitude: 26.8770109,
                longitude: 75.77420570000001,
            }}
        >
        </Marker>
        
    </MapView>
}
// 26.877542965953246, 75.7743068623071

const styles = StyleSheet.create({
    map: {
        height:"100%",
        // width:'100%'
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        // flex: 1
    }
})
export default Map