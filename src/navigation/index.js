import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/Homescreen/index";
import DestinationSearch from "../screens/DestinationSearch/index";
import SearchResults from "../screens/SearchResults/index"
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import About from "../screens/About/index";
import Wallet from "../screens/Wallet/index";
import Setting from "../screens/Setting/index";
import YourTrip from "../screens/Youtrip/index";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Destionation search" component={DestinationSearch} />
      <Stack.Screen name="Results" component={SearchResults} />
    </Stack.Navigator>
  )
}

function RootNavigation() {
  return (
    <NavigationContainer >
       <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'About') {
            iconName = focused ? 'user-circle' : 'user';
          } else if (route.name === 'Your Trip') {
            iconName = focused ? 'car' : 'car';
          }else if (route.name === 'Wallet') {
            iconName = focused ? 'credit-card-alt' : 'credit-card-alt';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list-ul' : 'list-ul';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e3d405',
        inactiveTintColor: '#111',
      }}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Your Trip" component={YourTrip} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Settings" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;
