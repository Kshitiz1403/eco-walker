import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

import RootNavigator from "./src/navigation/Root";


import Amplify from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native'
import config from './src/aws-exports'
Amplify.configure(config)

function App() {
  return (
   <RootNavigator/>
  );
}
export default App
// export default withAuthenticator(App)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
