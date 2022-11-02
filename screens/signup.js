import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {CheckBox} from '@react-native-community/checkbox'
 
export default function Signup() {
    const [isSelected, setSelection] = useState(false);
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
            <Text style={styles.greetingText}>Sign Up To Covid Test App</Text>
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Full Name"
            placeholderTextColor="#022B3A"
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email or Phone Number"
            placeholderTextColor="#022B3A"
            />
        </View>
    
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
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
    
        <TouchableOpacity>
            <View style={styles.terms_and_conditions}>
                <Text>Terms & Conditions</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgot_password_button}>Already Have An Account?</Text>
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
    height: 40,
    marginBottom: 16,
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
    marginBottom: 8,
  },
 
  signupButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#5E3023",
  },

  signupText:{
      color:"#FFFFFF"
  },

  greetingText:{
      fontWeight:'bold',
      marginBottom:25,
      fontSize:20
  }
});