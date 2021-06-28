import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style = {styles.profile}>
                <Image source={require('../../assets/profile-photo-big.jpg')} style={styles.profileImage} />
                <Text style={styles.profileName}>Kshitiz Agrawal</Text>
            </View>
            <View>

            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )

}

export default CustomDrawer;

const styles = StyleSheet.create({
    profile:{
        marginBottom:5,
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#E6E6E6',
        paddingVertical:10
        // justifyContent:'space-between'
    },
    profileImage: {
        height: 60,
        width:60,
        borderRadius:50,
    },
    profileName:{
        marginStart:10,
        fontSize:16

    }
})