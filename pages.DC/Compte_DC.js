/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text, Input,Avatar, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {View ,Image,StyleSheet, ImageBackground, TextInput,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

class MyAccountScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View>
          <View style={styles.headerCompte}>
            <Text style={{color:'white', fontSize:25}}>John DOE</Text>
            <Text style={{color:'white', fontSize:20}}>4 325 856 FCFA</Text>
            <Icon type='entypo' name='eye-with-line' color='white'/>
          </View>
          <View style={styles.OptionsCompteOne}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyReleveHome')}>
              <Image  id='releve'  source={require('../assets/icons/relev_dpay_white.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyDepotHome')}>
              <Image id='depot' source={require('../assets/icons/depôt_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyRetraitHome')}>
              <Image id='retrait'  source={require('../assets/icons/retrait_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',}}>
            <Text  style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Relevé</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Depôt</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Retrait</Text>
            </View>

          <View style={styles.OptionsCompteTwo}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyTransfertHome')}>
            <Image   source={require('../assets/icons/transfert_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyBonusHome')}>
            <Image   source={require('../assets/icons/recompense_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyDcardHome')}>
            <Image   source={require('../assets/icons/card_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', justifyContent:'center', margin:5, padding:5,}}>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:23}}>Transfert</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:23}}>Bonus</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:23}}>Dcard</Text>
          </View>
      </ScrollView>
    );
  }
}

class ReleveScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View><Text></Text></View>
      </ScrollView>
    );
  }
}

class DepotScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View>
            <Text style={styles.idcard}>Effectuer un dépôt</Text>
            <View style={styles.inputdepot}>
              <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder="Entrez le montant"/>
            </View>
            <View style={{marginLeft:8}}>
              <TouchableOpacity activeOpacity = { .5 } >
                <Button title='Deposer'   onPress={() => this.props.navigation.navigate('')} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white', marginTop:10}}>
              <View>
                <Text>Depôts Récents</Text>
              </View>
            </View>
            </View>
      </ScrollView>
    );
  }
}

class RetraitScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View>
          <View><Text></Text></View> */}
      </ScrollView>
    );
  }
}

class TransfertScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View><Text></Text></View>
      </ScrollView>
    );
  }
}

class BonusScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View><Text></Text></View>
      </ScrollView>
    );
  }
}

class DcardScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View>
            <Text style={styles.idcard}>Numéro de la carte</Text>
            <View style={styles.inputcard}>
            <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder='XXXX XXXX XXXX XXX'/> 
            </View>

            <Text style={styles.idcard}>Noms &amp; Prénoms</Text>
            <View style={styles.inputcard}>
            <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder='John Doe'/> 
            </View>

            <Text style={styles.idcard}>Date Expiration</Text>
            <View style={styles.dcardmois}>
              <TextInput placeholder="MM" style={{marginLeft:25}}/>
              
            </View>
            

            <Text style={styles.idcard}>Client Identification</Text>
            <View style={styles.inputcard}>
            <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder='00X XXX XXXX'/> 
            </View>
            <View style={styles.btnLogin}>
            {/* onPress={() => {alert('super');}} */}
              <TouchableOpacity activeOpacity = { .5 } >
                <Button title='Ajouter Carte'  onPress={() => this.props.navigation.navigate('MyDcardView')} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }
}

class DcardViewScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          {/* <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View> */}
          <View>
            
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
  headerCompte:{
    height:100,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
  },
  
  OptionsCompteOne:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:95,
  },
  OptionsCompteTwo:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:15,
  },
  containerCompte:{
    color:'white',
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
  },
  montantUser:{
    fontSize:25
  },
  imageLogin:{
    alignItems: 'center',
  },
  iconsContainerCompte:{
    width:75,
    height:75,
    paddingRight:20,
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
    // marginLeft:8,
    marginLeft:100
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
    height:50,
    marginTop:10,
    width:150,
   },
   idcard:{
     marginTop:8,
     color:'white',
     marginLeft:8,
     fontSize:16
   },
   inputcard:{
    backgroundColor:'white',
    borderRadius:27,
    alignItems:'center',
    marginBottom:25,
    marginTop:8,
    width:300,
    marginLeft:8
  },
  inputdepot:{
    backgroundColor:'white',
    borderRadius:27,
    alignItems:'center',
    marginBottom:8,
    marginTop:8,
    width:300,
    marginLeft:8
  },
  dcardmois:{
    backgroundColor:'white',
    marginLeft:8,
    borderRadius:27,
    width:85,
    marginTop:8,
    marginBottom:25,
  }
});


const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.avatar}>
        <Avatar source={require('../assets/images/bg_dpay1.png')} size="xlarge" rounded/>
        <Button onPress={() => {alert('super');}} buttonStyle={styles.buttons} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} title='Modifiez Profil'></Button>
      </View>
      <DrawerItems
      style={{color:'white',}}
       {...props} />
    </SafeAreaView>
  </ScrollView>
)
const MyAccountStackNavigator = createStackNavigator({
  MyAccountHome: {
    screen: MyAccountScreen,
    navigationOptions:({navigation})=>({
    title :'Mon Compte',
        }),
},
MyReleveHome: {
  screen: ReleveScreen, 
  navigationOptions:({navigation})=>({
  title :'Mon Relevé',
      }),
},

MyDepotHome: { 
  screen: DepotScreen, 
  navigationOptions:({navigation})=>({
  title :'Mes Depôts',
      }),
},

MyRetraitHome: {
  screen: RetraitScreen, 
  navigationOptions:({navigation})=>({
  title :'Mes Retraits',
      }),
},

MyTransfertHome: {
  screen: TransfertScreen, 
  navigationOptions:({navigation})=>({
  title :'Mes Transferts',
      }),
},

MyBonusHome: {
  screen: BonusScreen, 
  navigationOptions:({navigation})=>({
  title :'Mes Bonus',
      }),
},

MyDcardHome: {
  screen: DcardScreen, 
  navigationOptions:({navigation})=>({
  title :'Discountcard',
      }),
},

MyDcardView: {
  screen: DcardViewScreen, 
  navigationOptions:({navigation})=>({
  title :'Ma DiscountCARD',
      })
}

});

const DrawerNavigator = createDrawerNavigator({
  MyAccount: {
    screen: MyAccountStackNavigator,
    navigationOptions:({navigation})=>({
    title :'Mon Compte',
    drawerIcon:<Icon type='antdesign'  name='user' rounded reverse color='black'/>,
        }),
},
  Transaction: {
    screen: MyAccountScreen,
    navigationOptions:({navigation})=>({
      drawerIcon:<Icon type='material-community' name='cash-multiple' rounded reverse color='white'/>,
      title:'Transactions',
      tintColor:'white',
    })
  },
  Bonus: {
    screen: MyAccountScreen,
    navigationOptions:({navigation})=>({
      title:'Bonus',
      drawerIcon:<Icon containerStyle='white' type='material-community' name='sack' rounded reverse color='white'/>
    })
  },
  Parametres: {
    screen: MyAccountScreen,
    navigationOptions:({navigation})=>({
      title:'Paramètres',
      drawerIcon:<Icon type='antdesign' name='setting' rounded reverse color='white'/>,
    })
  },
  Deconnexion: {
    screen: MyAccountScreen,
    navigationOptions:({navigation})=>({
      title:'Deconnexion',
      drawerIcon:<Icon type='feather' name='power' rounded reverse color='black'/>,
    })
  },
},

{drawerBackgroundColor:'red',
contentComponent:CustomDrawerContentComponent});


export default createAppContainer(DrawerNavigator);




