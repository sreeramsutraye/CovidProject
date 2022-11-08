import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity  } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Result(props){

  const [appointments,setAppointments] = useState([]);
  const [user, setUser] = useState("");
  const welocomeMessage = require('./users.json');
  let data, activeUser;


  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    return () => {};
  });

  const getItemList = async () => {
    try {
      data = await AsyncStorage.getItem('appointmentsList');
      data = JSON.parse(data);
      setAppointments(data);

      activeUser = await AsyncStorage.getItem('activeUser');
      // activeUser = JSON.parse(activeUser);
      setUser(activeUser);

      if(data == null){
        setAppointments(welocomeMessage)
      }

      console.log("TEST RESULTS", appointments);
      
    } catch (err) {
      console.log(err);
    }
  };
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

        <View>
          <Text style={styles.loadingText}>Test Result</Text>
          <View style={styles.ResultData}>
            <View style={styles.column}>
              <Text>Date:</Text>
              <Text>Result:</Text>
              <Text>Hospital Name:</Text>
            </View>
            <View style={styles.column}>
              <Text>12/05/2022</Text>
              <Text>Negative</Text>
              <Text>Appollo Hospitals</Text>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Download</Text>
        </TouchableOpacity> */}

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
  column:{
    flexDirection:'column',
  },
  ResultData:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:300,
    paddingTop:20,
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

