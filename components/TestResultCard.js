import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView  } from 'react-native';


export default function TestResultCard(props){
    const appointment = props.appointment
    return(
        <View style={styles.ResultData}>
            <View style={styles.column}>
              <Text>Date:</Text>
              <Text>Result:</Text>
              <Text>Hospital Name:</Text>
            </View>
            <View style={styles.column}>
              <Text>{appointment.date}</Text>
              <Text>{appointment.report}</Text>
              <Text>{appointment.hospital !== undefined ? appointment.hospital : ' '}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
  });
  