import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup() {

    const rootUser = require('./users.json');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [users, setUsers] = useState([]);

    let data;
    
  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }

    tempFunction();

    return () => {};
  }, []);

    const navigation = useNavigation()

    // const data = require('./users.json');
    const getItemList = async () => {
      try {
        data = await AsyncStorage.getItem('usersList');
  
        data = JSON.parse(data);
  
        setUsers(data);

        if(data == null){
          setUsers(rootUser)
        }

      } catch (err) {
        console.log(err);
      }
    };

    const onSubmit = async () => {
      if(password!=confirmpassword) {
        alert("Password Mismatch");
        return;
      }

      // Check if user already exists
      let userExists = false;
      
      users.forEach((user) => {  
        if(user.email == email) {
          alert("User already Exits!");

          userExists = true;
          navigation.navigate('Login');
        }
      })

      if(userExists==false){
   
        const user = {
          "name" : name,
          "email" : email,
          "password" : password,
          "confirmpassword" : confirmpassword
        }

        users.push(user);      
        const users_data = JSON.stringify(users);
        // console.log(users_data);
        await AsyncStorage.setItem('usersList',users_data);
        console.log("SIGNUP", users);
        navigation.navigate('Home');
      }
    }
    return (
        <View style={styles.container}>
        <View>
            <Image 
                source={require("../assets/images/illustrations/signup.png")}
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
            onChangeText={(name) => setName(name)}
            />
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
            placeholder="Password"
            placeholderTextColor="#022B3A"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#022B3A"
            secureTextEntry={true}
            onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
            />
        </View>
    
        <TouchableOpacity>
            <View style={styles.terms_and_conditions}>
                <Text>Terms & Conditions</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={onSubmit}>
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