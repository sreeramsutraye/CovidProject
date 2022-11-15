import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Notification from '../components/Notification';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationScreen(){

  const [appointments,setAppointments] = useState([]);
  const [user, setUser] = useState("");

  const welocomeMessage = require('./users.json');
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
      data = await AsyncStorage.getItem('appointmentsList').then((res)=>setAppointments(JSON.parse(res)))
      // if(data == null){
      //   setAppointments(welocomeMessage)
      // }
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
          <TitleHeader HeaderTest="Notifications"/>
        </View>

        <ScrollView style={styles.notification}>         
            {appointmentList.map((item,index) => (
              <ScrollView>
                <Notification index={index} notificationHeaderText = {`Test Scheduled at ${item.hospital !== undefined ? item.hospital : ''}`} notificationSubText= {`Date: ${item.date} Time : ${item.time}`}/>
                <Notification index={index} notificationHeaderText = {`${item.name}'s Test Results are here`} notificationSubText={`Result: ${item.report}`} />
              </ScrollView>
            ))}
        </ScrollView>

        <View style={styles.bottomNavigator}>
          <BottomNavigator/>
        </View>

      </View>
  )
  }
  else{
    return(
      <View><Text>Loading...</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height:'100%',
    alignItems:'center',
  },

  notification: {
    width:'100%',
  },

  bottomNavigator:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    marginTop:8
  },
});

