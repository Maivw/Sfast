import React from 'react';
import {View, Text} from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import Message from '../../components/Message/index';
import HomeSearch from '../../components/HomSearch/index';
import {styles} from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeMap />
      <Message />
      <HomeSearch />
    </View>
  );
}

export default HomeScreen;
