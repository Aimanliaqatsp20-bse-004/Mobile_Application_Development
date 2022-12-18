import React from 'react'
import { View, Text,StyleSheet,Button} from 'react-native'

const SignUp = ({ navigation, route }) => {

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }}>SignUp Page</Text>
            <Text style={{ fontSize: 30 }}>login from name {route.params.email}</Text>
            <Button 
            title=" Go back to Home"
            style={styles.Button} onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 60 }}>Redirect To Home</Text>
            </Button >
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
          justifyContent: 'center',
          marginHorizontal: 16,
          backgroundColor:"grey",
      },
      Button: {
   
        width: "30",
         margin: 10,
          backgroundColor: "white",
          Color:"black",
          justifyContent:"space-between",
          textAlign:"center",
          flexDirection: 'colomn',
         height:"30",
       
      },
})
export default SignUp