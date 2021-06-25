import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigator from "./Home";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import Onboarding1 from "../screens/Onboarding1";
import RunningMap from "../screens/RuunningMap";
import HomeScreen from "../screens/HomeScreen";


const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text>{props.name}</Text>
    </View>
);

const RootNavigator = (props) => {
    return (
        <NavigationContainer>

            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: "#56CCF2",
                    itemStyle: {marginVertical: 5},
                }}
            >
                <Drawer.Screen name="Home" component={HomeNavigator}/>
                <Drawer.Screen name="Running">
                    {() => <DummyScreen name={"Running"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Rewards">
                    {() => <DummyScreen name={"Rewards"}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
