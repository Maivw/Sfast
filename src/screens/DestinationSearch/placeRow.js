import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Entypo from "react-native-vector-icons/Entypo";

function PlaceRow({data}) {
  
  return(
    <View style={styles.row}>
      <View style={[styles.iconWrapper, {backgroundColor: '#d4d4cd'}]}>
        {data.description === 'Home' ? <Entypo name={'home'} size={18} color={'yellow'}/> :  <Entypo name={'location-pin'} size={18} color={'white'}/>}
      </View>
      <Text style={styles.text}>{data.description || data.vicinity}</Text>
    </View>
  )
}

export default PlaceRow;
