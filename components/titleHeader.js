import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from "@react-navigation/native";

export default function TitleHeader(props){
    const navigation = useNavigation()

    return(
        <View style={styles.appBar}>
            <View>
                <TouchableOpacity>
                    <Icon name="medkit" color="#fff" size={20}></Icon>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titleHeaderText}>{props.HeaderTest}</Text>
            </View>
            <View>
                <TouchableOpacity  onPress={() => navigation.navigate('NotificationScreen')}>
                    <Icon name="bell" color="#fff" size={20}></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleHeaderText:{
        color:'#ffffff',
        fontSize: 20,
        fontWeight: "bold"
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
  