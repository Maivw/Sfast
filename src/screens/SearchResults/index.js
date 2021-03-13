import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {styles} from './styles';
import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap/index';



function SearchResults({route}) {
  const {originPlace, destinationPlace}= route.params;
  console.log("aaaa", originPlace);
  console.log("bbb", destinationPlace);
  return (
    <View style={styles.container}>
      <RouteMap />
      <CarTypes />
    </View>
  );
}

export default SearchResults;
