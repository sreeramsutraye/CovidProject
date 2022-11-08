import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Notification from '../components/Notification';
import NotificationList from '../components/NotificationList';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationScreen(){

  const [appointments,setAppointments] = useState([]);
  const [user, setUser] = useState("");
  const [userAppointments, setUserAppointments] = useState([])

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
  // let userAppointments = [];

  const getItemList = async () => {
    try {
      data = await AsyncStorage.getItem('appointmentsList').then((res)=>setAppointments(JSON.parse(res)))
      // if(data == null){
      //   setAppointments(welocomeMessage)
      // }
      activeUser = await AsyncStorage.getItem('activeUser').then((res)=>setUser(res));
      // activeUser = JSON.parse(activeUser);
      setUser(activeUser);
      
      // })    
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
      const Vara = appointmentList.map(x =>{
        return(
          <Notification notificationHeaderText= {x[date]} notificationSubText = {x[date]} />
        )
      })
    const name =  'Test Has Been Scheduled';
    const date = 'Date : ' + ' Time : ' 
    const resultHeader = 'Your Covid Test Results are out'
    const resultSubText = 'The Result is +ve'
    return (
      <View style={styles.container}>

        <View style={styles.titleHeader}>
          <TitleHeader HeaderTest="Notifications"/>
        </View>

        <View style={styles.notification}>
            {/* <NotificationList notificationList = {appointmentList}/> */}
            {console.log("httfdtudtud")}
            <Notification notificationHeaderText= "Appointment Scheduled" notificationSubText = "Date: Time:" />
            <Notification notificationHeaderText= "Test Results Are Out" notificationSubText = "You Are Negative" />

            {appointmentList.map((item,index) => (
              <Notification notificationHeaderText = {item.date} notificationSubText={item.date} />
            ))}

        </View>

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

