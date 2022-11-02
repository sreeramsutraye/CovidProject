import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
 
  return (
    <View style={styles.container}>
      <View>
        <Image 
            source={require("../assets/images/illustrations/testing.png")}
            style={styles.image}
            resizeMode='contain'/>
      </View>
 
      {/* <StatusBar style="auto" /> */}
      <View>
          <Text style={styles.greetingText}>Login To Covid Test App</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email or Phone Number"
          placeholderTextColor="#022B3A"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#022B3A"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmailOrPhone')}>
        <Text style={styles.forgot_password_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.forgot_password_button}>Don't Have An Account?</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height:'100%',
  },
 
  image: {
    marginBottom: 40,
    height:300,
    width:300
  },
 
  inputView: {
    backgroundColor: "#F3E9DC",
    borderRadius: 10,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    width: "70%",
    borderColor:"#022B3A",
    borderWidth: 1,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_password_button: {
    height: 30,
    marginTop: 4,
  },
 
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#5E3023",
  },

  loginText:{
      color:"#FFFFFF"
  },

  greetingText:{
      fontWeight:'bold',
      marginBottom:25,
      fontSize:20
  }
});