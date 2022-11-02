import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
// import {CheckBox} from '@react-native-community/checkbox'
 
export default function ConfirmEmailOrPhone() {
    const [isSelected, setSelection] = useState(false);

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
            <Text style={styles.greetingText}>Reset Password to Login</Text>
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email or Phone Number"
            placeholderTextColor="#022B3A"
            />
        </View>

        <TouchableOpacity style={styles.sendOtpButton}>
            <Text style={styles.loginText}>Send OTP</Text>
        </TouchableOpacity>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Enter OTP"
            placeholderTextColor="#022B3A"
            secureTextEntry={true}
            />
        </View>

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Confirm OTP</Text>
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
    backgroundColor: "#E1E5F2",
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
 
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom : 20,
    backgroundColor: "#022B3A",
  },

  sendOtpButton:{
    backgroundColor:'#1F7A8C',
    width: "40%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom : 30,
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