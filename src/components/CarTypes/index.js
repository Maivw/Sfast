import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, FlatList} from 'react-native';
import {styles} from './styles';
import CarType from '../CarType/index';
import carTypesData from '../../assets/data/types';

function CarTypes({typeState, onSubmit}) {
  const [selectedType, setSelectedType] = typeState;
  return (
    <View style={styles.container}>
      <FlatList
        data={carTypesData}
        renderItem={({item}) => <CarType car={item} onPress={() => setSelectedType(item.type)} isSelected={item.type === selectedType } />}
        keyExtractor={(item) => `${item.id}`}
      />
      <Pressable onPress={onSubmit} style={styles.pressable}>
        <Text style={styles.pressableText}>Confirm Sfast</Text>
      </Pressable>
    </View>
  );
}

export default CarTypes;
