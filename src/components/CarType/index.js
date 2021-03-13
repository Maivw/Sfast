import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, Image} from 'react-native';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CarType({car}) {
 
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
    <View style={styles.container}>
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
    </View>
  );
}

export default CarType;
