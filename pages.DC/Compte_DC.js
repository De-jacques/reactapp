/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text, Input,Avatar, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {View ,Image,StyleSheet, ImageBackground, TextInput,ScrollView,SafeAreaView} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
 class MyAccount extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
      <View >
        <View style={styles.logoPay}>
          <Text h4 style={{color:'white'}}>Discount</Text>
          <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
        </View>
        </View>
      </ScrollView>
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
    marginBottom:20,
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
    borderWidth: 2,
   },
   avatar:{
    alignItems:'center',
    marginTop:50,
   },
   buttons:{
    borderRadius:27,
    height:45,
    marginTop:10,
    width:150,
   },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.avatar}>
        <Avatar source={require('../assets/images/bg_dpay1.png')} size="xlarge" rounded/>
        <Button buttonStyle={styles.buttons} title='Modifiez Profil' ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}></Button>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)
const DrawerNavigator = createDrawerNavigator({
  MyAccount: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
    title :'Mon Compte',
    drawerIcon:<Icon name='home' rounded reverse color='black'/>,
        })
},
  Transaction: {
    screen: MyAccount,
    navigationOptions: {
      title :'Transactions'
      }
  }
},{drawerBackgroundColor:'red',
contentComponent:CustomDrawerContentComponent});
export default createAppContainer(DrawerNavigator);




