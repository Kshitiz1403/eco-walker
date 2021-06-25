import React, {useState} from 'react';
import {GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail,} from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import {useNavigation} from "@react-navigation/native";


const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const GooglePlacesInput = (props) => {

    // const [destinationPlace, setDestinationPlace] = useState('')

    const navigation = useNavigation()
    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data: GooglePlaceData, details: GooglePlaceDetail) => {
                // name:{details.name}
                // address:{details.formatted_address}
                // latitude:{details.geometry.location.lat}
                navigation.navigate('Directions', {details})
                // setDestinationPlace({details})
                // console.log(details)
                // console.log('-------------------------------------------------------')
                // console.log('Name- ', details.name)
                // console.log('Address- ', details.formatted_address)
                // console.log('Latitude- ', details.geometry.location.lat);
                // console.log('Longitude- ', details.geometry.location.lng);
                // props.name = details.name;
                // currentLocation: {true}
                // currentLocationLabel='Current Location'

            }}
            autoFocus={true}
            fetchDetails={true}
            // GooglePlacesDetailsQuery={{
            //     fields: ['formatted_address','geometry', 'photo']
            // }}
            query={{
                key: 'AIzaSyD3p65xxzAhd66hBztDi_9K0awHnxpIMEk',
                language: 'en',
                components: 'country:in',
            }}

            predefinedPlaces={[homePlace, workPlace]}
        />
    );
};

export default GooglePlacesInput;