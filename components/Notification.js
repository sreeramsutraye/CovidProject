import React, { useState } from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";

export default function Notification(props){
    const navigation = useNavigation()
        return(
            <View style={styles.container}>
                <View style={styles.notificationIcon}>
                    <TouchableOpacity>
                        <Icon name="eercast" color="#C08552" size={30}></Icon>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <Text style={styles.notificationHeaderText}>{props.notificationHeaderText}</Text>
                    </View>
                    <View>
                        <Text style={styles.notificationSubText}>{props.notificationSubText}</Text>
                    </View>
                </View>
            </View>
        )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#F3E9DC',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical:10,
        alignItems:'center'
    },
    notificationIcon:{
        paddingRight: 20,
    },
    notificationHeaderText:{
        fontSize: 20,
        fontWeight:'bold',
    },
    notificationSubText :{
        fontSize: 12,
    },
})
  