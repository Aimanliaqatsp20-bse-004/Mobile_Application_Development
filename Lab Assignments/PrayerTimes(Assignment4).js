
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PrayerTimes = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://islamic-api.rapidapi.com/namaz-time?latitude=${latitude}&longitude=${longitude}`,
        {
          headers: {
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
            "X-RapidAPI-Host": "islamic-api.rapidapi.com"
          }
        }
      )
      .then(response => {
        setPrayerTimes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [latitude, longitude]);

  if (!latitude || !longitude || !prayerTimes) {
    return <Text>Loading prayer times...</Text>;
  }

  return (
    <View>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Text>Fajr: {prayerTimes.fajr}</Text>
      <Text>Dhuhr: {prayerTimes.dhuhr}</Text>
      <Text>Asr: {prayerTimes.asr}</Text>
      <Text>Maghrib: {prayerTimes.maghrib}</Text>
      <Text>Isha: {prayerTimes.isha}</Text>
    </View>
  );
}

export default PrayerTimes;