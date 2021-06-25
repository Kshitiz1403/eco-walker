import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import Register from "./Register";
// import firebase from 'firebase'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => { navigation.navigate('RunningMap')};


  return (
    <View behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../assets/running-people.png")}
        style={{ width: 302.5, height: 201.25 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={signIn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
  },
  inputContainer: {
    width: 300,
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: "#56CCF2",
    width: 200,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderColor: "#56CCF2",
    borderWidth: 1,
  },
  loginText: {
    color: "white",
    fontSize: 17,
  },
  registerText: {
    color: "#56CCF2",
    fontSize: 17,
  },
});

export default Login;
