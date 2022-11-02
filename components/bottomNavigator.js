import React from "react";
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ResultIcon from 'react-native-vector-icons/Foundation'
import { useNavigation } from "@react-navigation/native";

export default function BottomNavigator(){
  const navigation = useNavigation()
    return(
        <View style={styles.bottomNavigator}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="home" color="#fff" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddNewTest')}>
            <Icon name="plus-square-o" color="#fff" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Result')}>
            <ResultIcon name="results" color="#fff" size={20}></ResultIcon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" color="#fff" size={20}></Icon>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigator:{
        backgroundColor:'#5E3023',
        flexDirection: 'row',
        width:'100%',
        padding:16,
        justifyContent:'space-around',
        borderRadius:10,
        alignItems:'baseline',
        marginTop:4
      },
    navigationText:{
        color:"white"
      },
})