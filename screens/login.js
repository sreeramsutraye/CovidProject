import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigation = useNavigation()

  // const data = require('./users.json');

  let data;
    
  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    return () => {};
  });

  const getItemList = async () => {
    try {
      data = await AsyncStorage.getItem('usersList');
      data = JSON.parse(data);
      setUsers(data);

      if(data == null){
        setUsers(rootUser)
      }
      
      // console.log(data);
      
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = () => {

    let userAuth = false;

    users.forEach((user) => {
      if(user.email == email && user.password == password) { 
        userAuth=true;
        navigation.navigate('Home');
      }
    })
    console.log(users)
    if(userAuth==false) {
      alert("Failed to Authenticate");
    }
    
  } 
  return (
    <View style={styles.container}>
      <View>
        <Image 
            source={require("../assets/images/illustrations/login.png")}
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
          placeholder="Phone Number"
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
 
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
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