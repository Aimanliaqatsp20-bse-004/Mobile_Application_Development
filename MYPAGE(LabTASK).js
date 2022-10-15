import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import MYPAGE from"./components/MYPAGE";
export default function App(){
  return(
    <view
    style={styles.container}>
      <text>
           MYPAGE
      </text>
      <MYCV></MYCV>
      <MYPAGE></MYPAGE>
        <StatusBar styles="auto"/>
        </view>
  );
}
const styles=StyleSheet.create( {
Wrapper1: {
flex: 1,
flexDirection:"row",
backgroundColor: 'Black',
alignItems: 'center',
justifyContent: 'center',
width:15,
height:15,
alignContent:'center',
},
Wrapper2: {
flex: 1,
flexDirection:"colomn",
backgroundColor: 'White',
alignItems: 'center',
justifyContent: 'flex-start',
width:15,
height:15,
alignContent:'stretch',
},
header:{
  flex:2,
  width:500,
  height:500,
},
contentarea:{
  flex:3,
  width:500,
  height:500,
},
footer:{
  flex:4,
  width:500,
  height:500,
},
});


