import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       <i> beats</i><b>MUSIC</b>
      </Text>
    </View>
    <Separator />
   
      <View style={styles.Button}>
        <Button
          title="Sign Up"
          onPress={() => Alert.alert('SignUp button pressed')
        }
        />
        <Separator />
        <Button
          title="LogIn"
          onPress={() => Alert.alert('LogIn button pressed')}
        />
      </View>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor:"black",
  },
  title: {
    textAlign: 'center',
    justifyContent:"top",
    marginVertical: 10,
    marginHorizontal: 10,
    color:"white",
    fontSize:120,
    fontStyle:"normal"
  },
  Button: {
   
    flexDirection: 'colomn',
    justifyContent: 'space-between',
    fontSize:90,
    color:"black",
    marginVertical: 200,
    marginHorizontal: 500,
    width:"10",
    height:"10",
    borderWidth: 0.5,
    height: 100, marginTop: 10,
  },
  separator: {

    marginVertical: 10,
    borderBottomColor: '#black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
