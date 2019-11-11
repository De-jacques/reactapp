/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 
 */

import React, { Component } from 'react';
import {Button,Text, Input} from 'react-native-elements'
// import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import {View ,Image,StyleSheet, ImageBackground } from 'react-native';
export default class App extends Component {
  render() {
    return (  
        <View style={{flex:1,backgroundColor:'#CF1111', alignItems:'center'}}>
          <View style={{flexDirection:'row', justifyContent:"flex-end",position:'absolute',right:0}}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay.</Text>
          </View>
          { <Image  source={require('../assets/images/register.jpg')} style={{width:250,height:250}} resizeMode='contain'/> }
          <View style={{flexDirection:'column',justifyContent:"space-around", position:'absolute',bottom:0,marginBottom:250, width:300, zIndex:1}}>
            <View>
              <Input placeholder='nom' errorStyle={{ color: '#FCDD00' }} errorMessage='Entrez votre nom'/>
            </View>
            <View>
              <Input placeholder='prenoms' errorStyle={{ color: '#FCDD00' }} errorMessage='Entrez votre prenoms'/>
            </View>
            <View>
              <Input placeholder='email' errorStyle={{ color: '#FCDD00' }} errorMessage='Entrez votre email'/>
            </View>
            <View>
              <Input placeholder='mot de passe' errorStyle={{ color: '#FCDD00' }} errorMessage='Entrez votre mot de passe'/>
            </View>
            <View>
              <Input placeholder='confirmer mot de passe' errorStyle={{ color: '#FCDD00' }} errorMessage='Veuillez confirmer votre mot de passe'/>
            </View>
            
          </View>
          <View style={{flex:1,justifyContent:'flex-end'}}>
          {/* <Image  source={require('../assets/images/bg_dpay1.png')} style={{width:380,height:500}} resizeMode='cover'/> */}
          </View>
        </View>

    );
  }
}
var styles = StyleSheet.create({
 mainstyle:{
   flex: 1,
   backgroundColor: 'blue'
 },
 buttons:{
  borderRadius:20,
  height:45
 }
});
 


