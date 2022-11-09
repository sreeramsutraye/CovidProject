import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";

export default function TitleHeader(props){
    const navigation = useNavigation()

    return(
        <View style={styles.appBar}>
            <View style={{flex:9}}>
                <Text style={{fontSize: 20,fontWeight: "bold",color:'#fff'}}>{props.HeaderTest}</Text>
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity  onPress={() => navigation.navigate('NotificationScreen')}>
                    <Icon name="bell" color="#fff" size={20}></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleHeaderText:{
        
    },
    appBar:{
        backgroundColor:'#C08552',
        flexDirection: 'row',
        width:'100%',
        padding: 16,
        justifyContent:'space-around',
        marginTop:25,
        alignItems:'baseline'
    }
})
  