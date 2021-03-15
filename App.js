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
import Router from "./src/navigation/index";
import {withAuthenticator} from "aws-amplify-react-native";
//import { withAuthenticator } from '@aws-amplify/ui-react';

import Amplify from "aws-amplify";
import awsExports  from "./src/aws-exports";
Amplify.configure(awsExports );
 
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

export default withAuthenticator(App);
