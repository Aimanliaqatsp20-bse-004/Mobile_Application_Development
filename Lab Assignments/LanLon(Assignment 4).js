import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const LatLng = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://geocode.rapidapi.com/locations/search`,
        {
          params: {
            query: "endpoint address"
          },
          headers: {
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
            "X-RapidAPI-Host": "geocode.rapidapi.com"
          }
        }
      )
      .then(response => {
        const location = response.data.locations[0];
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!latitude || !longitude) {
    return <Text>Loading latitude and longitude...</Text>;
  }

  return (
    <View>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};

export default LatLng;
