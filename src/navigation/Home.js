import React from "react";
import {View, Text} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Onboarding1 from "../screens/Onboarding1";
import Onboarding2 from "../screens/Onboarding2";
import Onboarding3 from '../screens/Onboarding3';
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import Welcome from "../screens/Welcome";
import RunningMap from "../screens/RuunningMap";
import SearchScreen from "../screens/SearchScreen";
import Map from "../components/Map";
import Directions from "../screens/Directions";
import OnBoardContainer from "../components/OnBoardContainer";
import Onboarding from "../screens/Onboarding";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="Onboarding1" component={Onboarding1}/>
            <Stack.Screen name="Onboarding2" component={Onboarding2}/>
            <Stack.Screen name="Onboarding3" component={Onboarding3}/>
            <Stack.Screen name="Onboarding" component={Onboarding}/>

            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>

            <Stack.Screen name="RunningMap" component={RunningMap}/>
            <Stack.Screen name="SearchScreen" component={SearchScreen}/>
            <Stack.Screen name="Directions" component={Directions}/>


            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="Home" component={HomeScreen}/>

        </Stack.Navigator>
    );
};

export default HomeNavigator