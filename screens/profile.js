import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile() {
  const [name, setName] = useState("ADMIN");
  const [email, setEmail] = useState("admin@gmail.com");
  const [mobile, setMobile] = useState("+91 1234567890");

  const on = true;
  const off = false;
  const navigation = useNavigation();

  let users;
    
  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    return () => {};
  },[]);

  const getItemList = async () => {
    try {
      users = await AsyncStorage.getItem('usersList');
      users = JSON.parse(users);

      if(users == null){
        setUsers(rootUser)
      }
      
      let activeUser =  await AsyncStorage.getItem('activeUser');

      users.forEach((user) => {  
        if(user.email == activeUser) {

          setEmail(user.email);
          setName(user.name);
        }
      })

    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {

    console.log("LOGGED OUT ",await AsyncStorage.getItem('activeUser'));

    await AsyncStorage.removeItem('activeUser');

    navigation.navigate('Login');

    
  }
  return (
      <View style={styles.container}>

        <View style={styles.titleHeader}>
          <TitleHeader HeaderTest="Profile"/>
        </View>

        <View>
            <Text style={styles.profileHeaders}>{<Icon name="user" color="#013A63" size={20}></Icon>}  Personal Details</Text>
            <View style={styles.personalDetailsContainer}>
                <View style={styles.column1}>
                    <Text style={styles.profileText}>Full Name</Text>
                    <Text style={styles.profileText}>Email ID</Text>
                    {/* <Text style={styles.profileText}>Contact</Text> */}
                </View>
                <View style={styles.column1}>
                    <Text style={styles.profileText}>{name}</Text>
                    <Text style={styles.profileText}>{email}</Text>
                    {/* <Text style={styles.profileText}>+91 1122334455</Text> */}
                </View>
            </View>
            <Text style={styles.profileHeaders}>{<Icon name="gears" color="#013A63" size={20}></Icon>}  Settings</Text>
            <View style={styles.personalDetailsContainer}>
                <View style={styles.column1}>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}><Text style={styles.profileText}>{<Ionicons name="notifications" color="#013A63" size={20}></Ionicons>} Notifications</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.profileText}>{<Ionicons name="md-help-circle" color="#013A63" size={20}></Ionicons>} Help</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmailOrPhone')}><Text style={styles.profileText}>{<Ionicons name="location" color="#013A63" size={20}></Ionicons>} Change Password</Text></TouchableOpacity>
                    <TouchableOpacity onPress={logOut}><Text style={styles.profileText}>{<MaterialCommunityIcons name="logout" color="#013A63" size={20}></MaterialCommunityIcons>} Log Out</Text></TouchableOpacity>
                </View>
                <View style={styles.column1}>
                    <TouchableOpacity><Text style={styles.profileText}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.profileText}></Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.profileText}></Text></TouchableOpacity>
                    {/* <TouchableOpacity><Text style={styles.profileText}></Text></TouchableOpacity> */}
                </View>
            </View>
        </View>

        <View style={styles.bottomNavigator}>
          <BottomNavigator/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height:'100%',
  },
  bottomNavigator:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  navigationText:{
    color:"white"
  },
  personalDetailsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:20
  },
  profileHeaders:{
      fontWeight:'bold',
      paddingHorizontal:20,
      paddingVertical:16,
      fontSize:20,
      color:'#013A63'
  },

  profileText:{
      fontSize:16,
      paddingVertical:12,
  }
});

