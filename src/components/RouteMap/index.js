import React, {useState, useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {styles} from './styles';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = 'AIzaSyBz6nwfaz00TcGhrBTs69sZdNgd0JPVP3g';
import {API, graphqlOperation, Auth} from "aws-amplify";
import {listCars} from "../../graphql/queries";

function RouteMap({origin, destination}) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCars = async() => {
      try {
        const res = await API.graphql(
          graphqlOperation(
            listCars
          )
        );
        setCars(res.data.listCars.items);
      }catch(e){
        console.log("ERRORRRR!!!",e);
      }
    };
    fetchCars();
   
  }, []);
  const originLocation = { 
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
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
          origin={originLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="green"
        />
        <Marker
          draggable
          coordinate={originLocation}
          title={'Origin'}
        />
        <Marker
          draggable
          coordinate={
            destinationLocation
          }
          title={'Destination'}
          
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
