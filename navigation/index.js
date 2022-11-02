import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import React from "react";
import AddNewTest from "../screens/addNewTest";
import Result from "../screens/testResults";
import Profile from "../screens/profile";
import Login from "../screens/login";
import Signup from "../screens/signup";
import ConfirmEmailOrPhone from "../screens/confirmEmailOrPhone";
import LandingScreen from "../screens/landingScreen";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createStackNavigator();

export default function MyStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingScreen" component = {LandingScreen} />
            <Stack.Screen name="Login" component = {Login} />
            <Stack.Screen name="Home" component = {Home} />
            <Stack.Screen name="ConfirmEmailOrPhone" component = {ConfirmEmailOrPhone} />
            <Stack.Screen name="Signup" component = {Signup} />
            <Stack.Screen name="AddNewTest" component = {AddNewTest} />
            <Stack.Screen name="Result" component = {Result} />
            <Stack.Screen name="Profile" component = {Profile} />
            <Stack.Screen name="NotificationScreen" component = {NotificationScreen} />
            
        </Stack.Navigator>
    )
}