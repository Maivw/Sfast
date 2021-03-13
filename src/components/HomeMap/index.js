import React from 'react';
import {View, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {styles} from './styles';
import cars from '../../assets/data/cars';

function RouteMap() {
  const getImage = (type) => {
    if (type === 'SfastXL') {
      return require(`../../assets/SfastXL.jpg`);
    } else if (type === 'SfastF') {
      return require(`../../assets/SfastF-top.jpg`);
    } else {
      return require(`../../assets/SfastX-top.jpg`);
    }
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
        {cars.map((car) => (
          <Marker 
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
             {/* //coordinate={{latitude: 37.78825, longitude: -122.4324}}>  */}
            <Image source={getImage(car.type)} style={{ width:35, height: 35, transform: [
              {rotate:`${car.heading}deg`}
            ]}}/>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

export default RouteMap;
