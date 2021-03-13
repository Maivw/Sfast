import React from 'react';
import {View, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {styles} from './styles';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyBz6nwfaz00TcGhrBTs69sZdNgd0JPVP3g';

function RouteMap() {
  const origin = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const destination = {
    latitude: 37.7682,
    longitude: -122.4324,
  };

  return (
    <View>
      <MapView
        style={{height: '70%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="green"
        />
        <Marker
          draggable
          coordinate={{latitude: origin.latitude, longitude: origin.longitude}}
          title={'Origin'}
          onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate)}}
        />
        <Marker
          draggable
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          title={'Destination'}
          onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate)}}
        />
      </MapView>
    </View>
  );
}

export default RouteMap;

// const getImage = (type) => {
//   if (type === 'SfastXL') {
//     return require(`../../assets/SfastXL.jpg`);
//   } else if (type === 'SfastF') {
//     return require(`../../assets/SfastF-top.jpg`);
//   } else {
//     return require(`../../assets/SfastX-top.jpg`);
//   }
// };

{
  /* {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
             {/* //coordinate={{latitude: 37.78825, longitude: -122.4324}}>  */
}
//    <Image source={getImage(car.type)} style={styles.carImage}  style={{width:25, height:25}}/>
//    </Marker>
//  ))} */}
