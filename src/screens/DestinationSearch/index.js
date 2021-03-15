import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {styles} from './styles';
// import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from "./placeRow"

const homePlace = {
  description: 'Home',
  geometry: {location: {latitude: 48.8152937, longtitude: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {latitude: 48.8496818, longtitude: 2.2940881}},
};

function DestinationSearch({ navigation }) {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);


  useEffect(() => {
    if(originPlace && destinationPlace) {
      navigation.navigate("Results", {originPlace, destinationPlace})
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from ?"
          onPress={(data, details = null) => setOriginPlace({data, details})}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top:10,
              left: 10,
              right: 10,
            },
            listView: {
              backgroundColor: '#eeeeee',
              position: 'absolute',
              top: 140,
              paddingVertical: 10,
              borderRadius: 5
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBz6nwfaz00TcGhrBTs69sZdNgd0JPVP3g',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data}/>}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) =>
            setDestinationPlace({data, details})
          }
          enablePoweredByContainer={false}
          suppressDefaultStyles
          
          styles={{
            textInput: styles.textInput,
            container: {
              position: "absolute",
              top:70,
              left: 10,
              right: 10,
              paddingVertical: 10,
              borderRadius: 5
            },
            listView: {
              backgroundColor: '#eeeeee',
              position: 'absolute',
              top: 85,
              paddingVertical: 10,
              borderRadius: 5
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBz6nwfaz00TcGhrBTs69sZdNgd0JPVP3g',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data}/>}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <View style={styles.circle}></View>
        <View style={styles.line}></View>
        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
}

export default DestinationSearch;
