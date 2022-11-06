import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';


export default function Home(navigation){

  return (
      <View style={styles.container}>

        <View style={styles.titleHeader}>
          <TitleHeader HeaderTest="Home"/>
        </View>
        
        <View style={styles.loadingBanner}>
          <Image 
            source = {require('../assets/images/illustrations/home.png')}
            style={styles.banner}
            resizeMode='contain'/>
        </View>

        <View style={{margin:12}}>
          <Text style={styles.loadingText}>Welcome to the Covid Test App</Text>
          <Text style={styles.homeText}>- You can Schedule a appointment at your nearest hospital for Covid Test</Text>
          <Text style={styles.homeText}>- Click on the Add Button in the Bottom Navigation Bar and fill out the Form</Text>
          <Text style={styles.homeText}>- Once the hospital accepts your request, simply reach the hospital at the scheduled time and get tested</Text>
          <Text style={styles.homeText}>- We will notify you once the results are out</Text>
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
    alignItems:'center',
  },
  bottomNavigator:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    marginTop:8
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
    paddingTop:20,
    marginVertical:8,
  },
  navigationText:{
    color:"white"
  },
  homeText:{
    marginVertical:4
  }
});

