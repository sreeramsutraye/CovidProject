import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Notification from '../components/Notification';

export default function NotificationScreen(){

  return (
      <View style={styles.container}>

        <View style={styles.titleHeader}>
          <TitleHeader HeaderTest="Notifications"/>
        </View>

        <View style={styles.notification}>
            <Notification notificationHeaderText="Covid Report Is Here" notificationSubText="You have been tested -ve" />
            <Notification notificationHeaderText="Quarantine Period" notificationSubText="Your Quarantine period will end on this saturday" />
            <Notification notificationHeaderText="Your Test Request is Accepted" notificationSubText="Appollo has accepted your test request for Sunday" />
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

