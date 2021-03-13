import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, FlatList} from 'react-native';
import {styles} from './styles';
import CarType from '../CarType/index';
import carTypesData from '../../assets/data/types';

function CarTypes() {
  const conFirmHandle = () => {
    console.warn('confrimmmmmm');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={carTypesData}
        renderItem={({item}) => <CarType car={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
      <Pressable onPress={conFirmHandle} style={styles.pressable}>
        <Text style={styles.pressableText}>Confirm Sfast</Text>
      </Pressable>
    </View>
  );
}

export default CarTypes;
