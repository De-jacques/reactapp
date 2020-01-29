/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text, Input} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View ,Image,StyleSheet, ImageBackground, TextInput, ScrollView } from 'react-native';
export default class App extends Component {
  render() {
    return (  
      <View style={styles.containerDefault}>
        <View style={styles.logoPay}>
          <Text h4 style={{color:'white'}}>Discount</Text>
          <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
        </View>
        <ScrollView>
          <View style={{alignItems:'center',marginTop:85}}>
          <View style={styles.imageLogin}>
            <Image  source={require('../assets/images/validation_mdp.jpg')} style={{width:250,}}  resizeMode='contain'/>
          </View>
        <View style={styles.containerForm}>
          <View style={styles.inputBox}>
            <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder='entrez le code'/> 
          </View>
          <View style={styles.btnLogin}>
            <Button  title='Envoyez'  ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons} />
          </View>
        </View>
        </View>
        </ScrollView>
      </View> 
    );
  }
}
var styles = StyleSheet.create({
  containerDefault:{
    backgroundColor:'#CF1111',
    flex:1	      
  },
  logoPay:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom:35,
  },
  imageLogin:{
    alignItems: 'center',
  },
  inputBox:{
    backgroundColor:'white',
    borderRadius:27,
    alignItems:'center',
    marginBottom:25,
  },
  containerForm:{
    alignItems:'center',
    marginTop:35,
    
  },
  btnLogin:{
    width:150,
  },
  buttons:{
    borderRadius:27,
    height:60,
   }
});
 


