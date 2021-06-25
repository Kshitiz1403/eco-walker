import React from 'react'
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TouchableHighlight,} from 'react-native'
import Data from '../../DustbinLocation';
// import RBSheet from "react-native-raw-bottom-sheet";



const Item = ({distance, time}) => (
    <TouchableOpacity>
        <View style={{borderWidth: 2, borderColor: '#56CCF2', borderRadius: 5, marginEnd: 10, marginVertical: 10,}}>
            <View style={{width: 140, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Text>{distance} </Text>
                <Text>{time}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

// const

export default function LocationCard(props) {


    const renderItem = ({item}) => (
        <Item distance={item.distance} time={item.time}/>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg'}}
                        style={styles.image}/>
                </View>
                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                }}>
                    <Text style={styles.locationName}>{props.locationName}</Text>
                    <Text style={styles.locationAddress}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante lorem. Praesent sagittis orci et dolor euismod </Text>
                </View>
            </View>
            <View>
                {/* Horizontal Rule */}
                <View style={{borderColor: '#A5AAB7', borderBottomWidth: 0.2, marginHorizontal: 20, marginTop: 5}}/>
                <View style={styles.distance_time}>

                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/Dustbin.png')}/>
                        <Text style={styles.distance_timeText}>3 Dustbin Spots </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/directions-svgrepo-com.png')}/>
                        <Text style={styles.distance_timeText}>3.1km </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginStart: 20}}>
                        <Image source={require('../../assets/directions-car.png')}/>
                        <Text style={styles.distance_timeText}>38 minutes </Text>
                    </View>
                </View>
                {/* Horizontal Rule */}
                <View style={{borderColor: '#A5AAB7', borderTopWidth: 0.2, marginHorizontal: 20, marginVertical: 10}}/>
            </View>
            <View style={styles.dustbinContainer}>
                <Text style={{fontSize: 20, color: '#606470'}}>Dustbins</Text>

            </View>
            <View style={{marginHorizontal: 20}}>
                <FlatList
                    horizontal={true}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{marginHorizontal: 20, marginBottom: 10}}>
                <View>
                    <Text style={{fontSize: 17, color: '#606470'}}>Location Name</Text>
                </View>
                <View style={{marginVertical: 5}}>
                    <Text style={{color: '#A5AAB7'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante lorem.
                        335001, India</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: 'white',
        elevation: 20,
    },
    card: {
        flexDirection: 'row',
        marginTop: 15
    },
    imageContainer: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        // resizeMode: 'contain',
        borderRadius: 10,
        width: 120,
        height: 120
    },
    locationName: {
        color: '#606470',
        fontSize: 22
    },
    locationAddress: {
        color: '#A5AAB7',
        marginTop: 6
    },
    distance_time: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    distance_timeText: {
        marginStart: 5,
        color: '#A5AAB7'
    },
    dustbinContainer: {
        marginHorizontal: 20
    },
    dustbinHeading: {
        fontSize: 20, color: '#A5AAB7'
    }
})

