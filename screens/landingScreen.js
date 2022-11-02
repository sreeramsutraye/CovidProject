import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
export default function LandingScreen() {
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
          <Text style={styles.greetingText}>Let's get tested for Covid-19</Text>
      </View>

      <View>
        <Text style={styles.helpingText}>Help protect yourself and the people around you by getting tested through our application</Text>
      </View>
 
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Let's get started</Text>
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
    backgroundColor: "#E1E5F2",
    borderRadius: 10,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    width: "70%",
    borderColor:"#022B3A",
    borderWidth: 1,
  },

  helpingText:{
    textAlign:'center',
    paddingVertical:12,
    paddingHorizontal:28,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_password_button: {
    height: 30,
    marginBottom: 30,
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