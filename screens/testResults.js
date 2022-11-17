import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView  } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestResultCard from '../components/TestResultCard';

export default function Result(props){

  const [appointments,setAppointments] = useState([]);
  const [user, setUser] = useState("");

  const welcomeMessage = require('./users.json');

  const notification_example = require('./notifications.json');
  let data, activeUser;

  // const appList = await AsyncStorage.getItem('appointmentsList'); 

  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    // return () => {};
  },[]);
  const getItemList = async () => {
    try {
      // data = await AsyncStorage.getItem('appointmentsList').then((res)=>setAppointments(JSON.parse(res)))
      data = await AsyncStorage.getItem('appointmentsList').then((res)=>{
        if(res == null){
          setAppointments(notification_example);
        }
        else
        setAppointments(JSON.parse(res));
      })
      activeUser = await AsyncStorage.getItem('activeUser').then((res)=>setUser(res));    
    } catch (err) {
      console.log(err);
    }
  };


  if (appointments !== undefined){
    const appointmentList = []
    if (user !== undefined){
      let mainUser = user
      for(let i =0; i<appointments.length; i++){
        if (appointments[i].email == mainUser){
          appointmentList.push(appointments[i])
        }
      }
    }

    return (
        <View style={styles.container}>

          <View style={styles.titleHeader}>
            <TitleHeader HeaderTest="Test Results"/>
          </View>

          <View style={styles.loadingBanner}>
            <Image 
              source = {require('../assets/images/illustrations/test_result.png')}
              style={styles.banner}
              resizeMode='contain'/>
          </View>

          <ScrollView>
            <Text style={styles.loadingText}>{appointmentList.length !== 0 ? "Your Test Results" : "No Tests are Present"}</Text>
            {appointmentList.map((item,index) => (
              <TestResultCard appointment={appointmentList[index]} index={index} item={item}/>
            ))}
          </ScrollView>

          {/* <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Download</Text>
          </TouchableOpacity> */}

          <View style={styles.bottomNavigator}>
            <BottomNavigator/>
          </View>
        </View>
    )}
    else{
      return(
        <View><Text>Loading</Text></View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height:'100%',
    alignItems:'center',
  },
  bottomNavigator:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },

  banner:{
    width:300,
    height:300,
    justifyContent:'center',
    alignItems:'center',
  },

  loadingBanner:{
    justifyContent:'center',
    alignItems:'center',
  },
  loadingText:{
    color:"#022B3A",
    fontWeight:'bold',
    fontSize:20,
  },
  navigationText:{
    color:"white"
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
});

