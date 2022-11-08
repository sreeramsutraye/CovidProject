import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Profile() {
  const on = true;
  const off = false;
  const navigation = useNavigation()
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
                    <Text style={styles.profileText}>Contact</Text>
                </View>
                <View style={styles.column1}>
                    <Text style={styles.profileText}>Virat Kohli</Text>
                    <Text style={styles.profileText}>viratkohli@gmail.com</Text>
                    <Text style={styles.profileText}>+91 1122334455</Text>
                </View>
            </View>
            <Text style={styles.profileHeaders}>{<Icon name="gears" color="#013A63" size={20}></Icon>}  Settings</Text>
            <View style={styles.personalDetailsContainer}>
                <View style={styles.column1}>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}><Text style={styles.profileText}>{<Ionicons name="notifications" color="#013A63" size={20}></Ionicons>} Notifications</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.profileText}>{<Ionicons name="md-help-circle" color="#013A63" size={20}></Ionicons>} Help</Text></TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('ConfirmEmailOrPhone')}><Text style={styles.profileText}>{<Ionicons name="location" color="#013A63" size={20}></Ionicons>} Change Password</Text></TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.profileText}>{<MaterialCommunityIcons name="logout" color="#013A63" size={20}></MaterialCommunityIcons>} Log Out</Text></TouchableOpacity>
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

