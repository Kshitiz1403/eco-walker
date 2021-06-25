import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style = {styles.profile}>
                <Image source={require('../../assets/profile-photo.jpg')} style={styles.profileImage} />
                <Text style={styles.profileName}>Kshitiz Agrawal</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )

}

export default CustomDrawer;

const styles = StyleSheet.create({
    profile:{
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between'
    },
    profileImage: {
        height: 75,
        width:75,
        borderRadius:50
        // resizeMode:'contain'
    },
    profileName:{
        marginStart:20

    }
})