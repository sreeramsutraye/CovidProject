import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
// import {CheckBox} from '@react-native-community/checkbox'
 
export default function Signup() {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
        <View>
            <Image 
                source={require("../assets/images/illustrations/rupay.png")}
                style={styles.image}
                resizeMode='contain'/>
        </View>
    
        {/* <StatusBar style="auto" /> */}
        <View>
            <Text style={styles.greetingText}>Enter New Password</Text>
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder=" New Password"
            placeholderTextColor="#022B3A"
            secureTextEntry={true}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#022B3A"
            secureTextEntry={true}
            />
        </View>
    
        <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.loginText}>RESET PASSWORD</Text>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height:'100%',
  },
 
  image: {
    marginBottom: 40,
    height:250,
    width:250,
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

  terms_and_conditions: {
    height: 30,
    marginBottom: 30,
  },
 
  resetButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
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