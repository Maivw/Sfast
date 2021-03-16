import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView, Alert} from 'react-native';
import {styles} from './styles';
import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap/index';
import {API, graphqlOperation, Auth} from "aws-amplify";
import {createOrder} from "../../graphql/mutations";




function SearchResults({route, navigation }) {
  const typeState = useState(null);
  const {originPlace, destinationPlace}= route.params;

  const onSubmit = async()=> {
    const [type] = typeState;
    console.log("nnn", type)
    if (!type) {
      return;
    }
      try{
        console.log("test");
        const userInfo = await Auth.currentAuthenticatedUser();
        const date = new Date();
        const input = {
          createdAt: date.toISOString(),
          type:type,
          originLatitude:originPlace.details.geometry.location.lat,
          originLongitude: originPlace.details.geometry.location.lng,
          desLatitude: destinationPlace.details.geometry.location.lat,
          desLongitude: destinationPlace.details.geometry.location.lng,
          userId: userInfo.attributes.sub,
          carId: "1",

        }
        const response = await API.graphql(
          graphqlOperation(
            createOrder, {
              input: input
            },
          )
        )
        console.log(response);
      }catch(e){
        console.log("Errrrr", e)
      }
    
  }
  return (
    <View style={styles.container}>
      <RouteMap origin={originPlace} destination={destinationPlace}/>
      <CarTypes typeState={typeState} onSubmit={onSubmit} />
    </View>
  );
}

export default SearchResults;
