import 'react-native-gesture-handler';
import { AppRegistry } from "react-native";
import React,{useEffect} from 'react';
import {
  StyleSheet, 
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/Homescreen/index';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults/index';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import Router from "./src/navigation/index"

const App= () => {
  useEffect(()=> {
    Geolocation.requestAuthorization()
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
