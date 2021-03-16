import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CarType({car, onPress, isSelected} ) {
 
  const getImage = () => {
    if (car.type === 'SfastXL') {
      return require(`../../assets/SfastXL.jpg`);
    } else if (car.type === 'SfastF') {
      return require(`../../assets/SfastF.jpg`);
    } else {
      return require(`../../assets/SfastX.jpg`);
    }
  };
  return (
    <Pressable onPress={onPress} style={[styles.container],{backgroundColor: isSelected? '#ededed': 'white', flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 15}}>
      <Image source={getImage(car.type)} style={styles.image} />
      <View style={styles.midContainer}>
        <Text style={styles.text}>
          {car.type}
          {'  '}
          <Fontisto name={'persons'} size={14} style={styles.personIcon} /> 3
        </Text>
        <Text style={styles.time}>9:00 PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={16} color={'#f5ed0a'} />
        <Text style={styles.price}>est. ${car.price}</Text>
      </View>
    </Pressable>
  );
}

export default CarType;
