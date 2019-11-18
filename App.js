/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text,Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View ,Image,StyleSheet} from 'react-native';
import LoginDC from './pages.DC/Login_DC';
import ConnexionDC from './pages.DC/Register_DC';
import CompteDC from './pages.DC/Compte_DC';
class AppDC extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (  
        <View style={{flex:1,backgroundColor:'#CF1111', alignItems:'center'}}>
          <View style={{flexDirection:'row', justifyContent:"flex-end",position:'absolute',right:0}}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay.</Text>
          </View>
          <Image  source={require('./assets/images/bg_dpay2.png')} style={{width:250,height:250}} resizeMode='contain'/>
          <View style={{flexDirection:'row',justifyContent:"space-around", position:'absolute',bottom:0,marginBottom:250, width:300, zIndex:1}}>
            <Button onPress={()=>this.props.navigation.navigate('Login')} title='Connectez-Vous' ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
            <Button onPress={()=>this.props.navigation.navigate('Connexion')}  title='Inscrivez-Vous'  ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
          </View>
          {/* {()=>this.props.navigation.navigate('SecondeVue')} */}
          <View style={{flex:1,justifyContent:'flex-end'}}>
          <Image  source={require('./assets/images/bg_dpay1.png')} style={{width:380,height:500}} resizeMode='cover'/>
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
 
const AppNavigator = createStackNavigator({
  Home: {
    screen: AppDC,
    navigationOptions: {
    header: null,
    },
  },
  Login: {
    screen: LoginDC,
    navigationOptions: {
    header: null,
      },
  },
  Connexion:{
    screen:ConnexionDC,
    navigationOptions: {
    header: null,
    }
  },
  Compte:{
    screen:CompteDC,
     navigationOptions:({navigation})=>({
    //   header:null,
    headerTransparent:true, 
    headerLeft:(<View><Icon onPress={()=>navigation.toggleDrawer()} name='menu' color='white' size={45}/></View>)
     }),
  }
});
export default createAppContainer(AppNavigator);

