import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Notification from '../components/Notification';

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
    return () => {};
  },[]);
  // let userAppointments = [];

  const getItemList = async () => {
    try {
      data = await AsyncStorage.getItem('appointmentsList').then((res)=>setAppointments( res))
      // data = JSON.parse(data);
      // setAppointments(data);

      if(data == null){
        setAppointments(welocomeMessage)
      }

      activeUser = await AsyncStorage.getItem('activeUser').then((res)=>setUser(res));
      // activeUser = JSON.parse(activeUser);
      setUser(activeUser);
      // console.log("APPOINTMENTS", appointments);
      
      // data.forEach(appointment => {
      //   if (appointment.email == activeUser){
      //     userAppointments.push(appointment)
      //   }
      //   // console.log(userAppointments);
      // })    
    } catch (err) {
      console.log(err);
    }
  };

  // const Notifications = (appointments.map((appointment) => {
    
  //   const NotificationList = () => {
  //     const name = appointment.name + 'Test Has Been Scheduled';
  //     const date = 'Date : ' + appointment.date + ' Time : ' + appointment.time;
  //     const resultHeader = 'Your Covid Test Results are out'
  //     const resultSubText = 'The Result is +ve'
  //     return(
  //       <Notification 
  //       notificationHeaderText={name}
  //       notificationSubText={date}
  //       />
  //     )
  //   }
  // }))

  return (
      <View style={styles.container}>

        <View style={styles.titleHeader}>
          <TitleHeader HeaderTest="Notifications"/>
        </View>

        <View style={styles.notification}>
            <TouchableOpacity>
              {console.log("app" + appointments)}
            {/* {appointments.map((item, index) => (
              <Notification 
                notificationHeaderText={"lsidrfglfgbwjkfb"}
                notificationSubText={"dhviwdvbiuwbvuwbuwbujbuj"}
              />
          ))} */}
            </TouchableOpacity>
        </View>

        <View style={styles.bottomNavigator}>
          <BottomNavigator/>
        </View>

      </View>
  )
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

