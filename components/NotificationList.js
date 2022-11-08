import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";
import Notification from "./Notification";

export default function NotificationList(props){
    const navigation = useNavigation()
    const notificationList = props.notificationList

    return(
        <View>
            
        </View>
    )
}