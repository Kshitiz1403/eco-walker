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
import CustomDrawer from "./CustomDrawer";


const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text>{props.name}</Text>
    </View>
);

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={
                (props: DrawerContentComponentProps<DrawerContentOptions>) => (
                    <CustomDrawer {...props}/>
                )
            }>
                <Drawer.Screen name="Home" component={HomeNavigator}/>
                <Drawer.Screen name="Running">
                    {() => <DummyScreen name={"Running"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Statistics">
                    {() => <DummyScreen name={"Statistics"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Rewards">
                    {() => <DummyScreen name={"Rewards"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Schedule">
                    {() => <DummyScreen name={"Schedule"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Settings">
                    {() => <DummyScreen name={"Settings"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Sign Out">
                    {() => <DummyScreen name={"Sign Out"}/>}
                </Drawer.Screen>


            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
