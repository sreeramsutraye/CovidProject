import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from 'react-native-select-dropdown';
import TitleHeader from '../components/titleHeader';
import BottomNavigator from '../components/bottomNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list';

export default function AddNewTest() {
  const navigation = useNavigation()
  const [fullName,setFullName] = useState(null);
  const [phoneNumber,setPhoneNumber] = useState(null);
  // const hospitals=['Apollo', 'Vcare', 'Dr.Reddy']
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(null)
  const welocomeMessage = require('./notifications.json');
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  // const [hospital,setHospital] = useState(null)
  const [hospital, setSelected] = useState("")

  const [appointments, setAppointments] = useState([]);
  let data;

  const hospitalsList = [
    {key:'1',value:'Apolo'},
    {key:'2',value:'Narayana'},
    {key:'3',value:'VCare'}
  ]

  const genderList = [
    {key:'1',value:'Male'},
    {key:'2',value:'Female'},
    {key:'3',value:'Neither'}
  ]

  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }
    tempFunction();
    return () => {};
  },[]);

  const getItemList = async () => {
    try {
      data = await AsyncStorage.getItem('appointmentsList');
      data = JSON.parse(data);
      setAppointments(data);
      if(data == null){
        setAppointments(welocomeMessage)
      }
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async () => {
    const result = ['Positive','Negative']
    let random = Math.floor(Math.random() * result.length);
    const appointment = {
      "name": fullName,
      "email": phoneNumber,
      "date": date,
      "time": time,
      "report": result[random],
      "hospital":hospital
    };

    appointments.push(appointment);      
    const appointments_data = JSON.stringify(appointments);
    // console.log(users_data);
    await AsyncStorage.setItem('appointmentsList',appointments_data);
    // console.log("APPOINTMENT", appointments);
    navigation.navigate('Home');
  } 
  return (
      <View style={styles.container}>

        <View style={{marginBottom:20}}>
          <TitleHeader HeaderTest="Schedule Test"/>
        </View>

        
        
        <View style={{width:'100%',alignItems:'center'}}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Full Name"
              placeholderTextColor="#022B3A"
              onChangeText={(fullName) => setFullName(fullName)}
            />
          </View>
 
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#022B3A"
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
          </View>

          {/* <View style={{width:'70%',alignItems:'center',marginVertical:15}}>
            <SelectDropdown
              data={hospitals}
              style={{width:'100%'}}
              defaultButtonText="Select Hospital"
              onSelect={(selectedItem, index) => {
                setHospital(selectedItem)
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View> */}

          <View style={{width:'70%',marginTop:10}}>
            <SelectList data= {hospitalsList} setSelected={setSelected} save="value" label="Categories" placeholder='Select Hospital'/>
          </View>

          <View style={{flexDirection:'row',marginTop:5}}>
            <View style={{backgroundColor: "#fff",borderRadius: 10,height: 45,marginVertical: 15,marginRight:"10%", width: "30%",borderColor:"#022B3A",borderWidth: 1}}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Age"
                placeholderTextColor="#022B3A"
                onChangeText={(age) => setAge(age)}
              />
            </View>
            <View style={{marginVertical: 15,width: "30%",}}>
              <SelectList data= {genderList} setSelected={setGender} save="value" search={false} searchicon={<></>} label="Gender" placeholder='Gender'/>
            </View>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Data in DD/MM/YYYY"
              placeholderTextColor="#022B3A"
              onChangeText={(date) => setDate(date)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Time in HH/MM"
              placeholderTextColor="#022B3A"
              onChangeText={(time) => setTime(time)}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
            <Text style={{color:'#fff',fontSize:16}}>SUBMIT</Text>
          </TouchableOpacity>
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
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-start',

  },
  bottomNavigator:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 45,
    marginVertical: 10,
    width: "70%",
    borderColor:"#022B3A",
    borderWidth: 1,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  loginButton: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#022B3A",
  },

  loginText:{
    color:"#fff",
    padding: 40,
  },
});

