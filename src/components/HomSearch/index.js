import React from 'react';
import {View, Text, TextInput,Pressable} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function HomeSearch() {
  const navigation = useNavigation(); 
  const goToSearch = () => {
    console.warn("Searchhhh");
    navigation.navigate('Destionation search')
  }
  return (
    <View>
      <Pressable style={styles.inputBox} onPress={goToSearch }>
        <Text style={styles.inputText}>Where to ? </Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={24} style={styles.clockIcon} />
          <Text style={styles.text}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={24}
            style={styles.arrowIcon}
          />
        </View>
      </Pressable>
      <View style={styles.row} >
        <View style={styles.iconWrapper}>
          <AntDesign
            name={'clockcircle'}
            size={22}
            style={styles.clockIconLighter}
          />
        </View>
        <Text style={styles.text}>Destination</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconWrapper, {backgroundColor: '#d4d4cd'}]}>
          <FontAwesome
            name={'home'}
            size={22}
            style={styles.clockIconLighter}
          />
        </View>
        <Text style={styles.text}>Home</Text>
      </View>
      {/* Home destination */}
    </View>
  );
}

export default HomeSearch;
