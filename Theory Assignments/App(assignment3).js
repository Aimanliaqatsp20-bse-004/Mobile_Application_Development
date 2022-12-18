

import React from 'react';
import {
  SafeAreaView,

  StatusBar,
  StyleSheet,

} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from './components/HomeScreen';
import UserName from './components/UserName';
import Password from './components/Password';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="UserName" component={UserName} options={{ title: 'UserName' }} />
          <Stack.Screen name="Password" component={Password} options={{ title: 'Password' }} />
      
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor:"grey",
  }
  
})


export default App;