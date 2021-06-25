import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
// import Login from "./Login";
// import { auth } from "../../firebase";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {

  }


  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../assets/running-people.png")}
        style={{ width: 302.5, height: 201.25 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          type="text"
          autoCapitalize="sentences"
          autoCorrect={false}
          autoFocus
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={register}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={register}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  registerButton: {
    backgroundColor: "#56CCF2",
    width: 200,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  loginButton: {
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
  registerText: {
    color: "white",
    fontSize: 17,
  },
  loginText: {
    color: "#56CCF2",
    fontSize: 17,
  },
});

export default Register;
