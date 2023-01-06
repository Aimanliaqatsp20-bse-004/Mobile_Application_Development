import React from 'react';
import { View } from 'react-native';
import PrayerTimes from './components/PrayerTimes';
import LanLon from './components/LanLon';
const App = () => {
  return (
    <View>
      <PrayerTimes />
      <LanLon/>
    </View>
  );
};

export default App;


