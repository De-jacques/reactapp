/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component} from 'react';
import {Button,Text, Input,Avatar, Icon,ListItem,Divider} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {View ,Image,StyleSheet,FlatList, ImageBackground, TextInput,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Depot from './helpers/DepotData';
import DepotItem from './components/DepotItem';

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
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('MyRechargementHome')}>
              <Image id='retrait'  source={require('../assets/icons/retrait_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',}}>
            <Text  style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Relevé</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Depôt</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:5}}>Rechargement</Text>
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
          <View><Text></Text></View>
      </ScrollView>
    );
  }
}

class DepotScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View>
            <Text style={styles.idcard}>Effectuer un dépôt</Text>
            <View style={styles.inputdepot}>
              <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder="Entrez le montant"/>
            </View>
            <View style={{marginLeft:8}}>
              <TouchableOpacity activeOpacity = { .5 } >
                <Button title='Deposer'   onPress={() => this.props.navigation.navigate('MyDepotSucess')} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop:10}}>
              <View style={{ flex:1,flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'#ecf0f1'}}>
                <Text style={{marginTop:8, color:'red',marginLeft:8}}>Depôts Récents</Text>
                <Button title="Tout Afficher" buttonStyle={styles.btnAll} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}}/>
              </View>
            </View>
            {/* <FlatList
            data={Depot}
            keyExtractor={(item) => item.id.toString()}
    renderItem = {({item}) =><DepotItem/>}
            /> */}

            <View style={{backgroundColor:'#7f8c8d',marginTop:2, height:35,flexDirection:'row'}}>
              <Text style={{color:'white',marginTop:8,fontSize:14, marginLeft:6}}>Compte</Text>
              <Text style={{color:'white',marginLeft:40,marginTop:8,fontSize:14}}>Libellé</Text>
              <Text style={{color:'white',marginLeft:87,marginTop:8,fontSize:14}}>Montant</Text>
              <Text style={{color:'white',marginLeft:40,marginTop:8,fontSize:14}}>Détail</Text>
              </View>
                      {
              data.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                  bottomDivider
                />
              ))
            }
            </View>
      </ScrollView>
    );
  }
}

class RechargementScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View>
            <Text style={styles.idcard}>Effectuer un rechargement</Text>
            <View style={styles.inputdepot}>
              <TextInput style={{borderRadius:27, width:300, marginLeft:25}} placeholder="Entrez le montant"/>
            </View>
            <View style={{marginLeft:8}}>
              <TouchableOpacity activeOpacity = { .5 } >
                <Button title='Recharger'   onPress={() => this.props.navigation.navigate('MyDepotSucess')} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop:10}}>
              <View style={{ flex:1,flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'#ecf0f1'}}>
                <Text style={{marginTop:8, color:'red',marginLeft:8}}>Rechargements Récents</Text>
                <Button title="Tout Afficher" buttonStyle={styles.btnAll} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}}/>
              </View>
            </View>
            </View>
      </ScrollView>
    );
  }
}


class TransfertScreen extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View>
            {/* <Text style={styles.idcard}>Montant à transférer</Text> */}
            <View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{color:'white', marginLeft:15,marginBottom:4}}>Montant à transférer</Text>
              <Text style={{color:'white', marginLeft:67}}>Destinataire</Text>
            </View>
            <View style={{flexDirection:'row'}}> 
              <TextInput style={{borderRadius:27, width:170, marginLeft:8,backgroundColor:'white'}} placeholder="Entrez le montant"/>
              <TextInput style={{borderRadius:27, width:170, marginLeft:8,backgroundColor:'white'}} placeholder="DPY-XXX XXX XXX"/>
            </View>
              
            {/* </View> */}
            <View style={{marginLeft:8,marginTop:4}}>
              <TouchableOpacity activeOpacity = { .5 } >
                <Button title='Transférer'   onPress={() => this.props.navigation.navigate('MyDepotSucess')} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop:35}}>
              <View style={{ flex:1,flexDirection: 'row',justifyContent: 'space-between', backgroundColor:'#ecf0f1'}}>
                <Text style={{marginTop:8, color:'red',marginLeft:8}}>Transferts Récents</Text>
                <Button title="Tout Afficher" buttonStyle={styles.btnAll} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}}/>
              </View>
            </View>
            </View>
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
            <View style={styles.inputdateexpir}>
                 <TextInput placeholder="MM" />
                <TextInput placeholder="AA" />
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
          <View >
            <Text style={{color:'white',marginTop:8,marginLeft:8}}>Coordonnées</Text>
          </View>
          <View style={{flexDirection:'column'}}>
            <View style={styles.inputcardwithdata}>
              <TextInput style={{position:'absolute',zIndex:-1}}/>
            </View>
            <View style={styles.inputcardwithdata}>
              <TextInput style={{position:'absolute',zIndex:-1}}/>
            </View>
          </View>
          <View style={{marginTop:50,marginLeft:10,position:'absolute',backgroundColor:'red',width:299}}><Text style={{fontSize:17, color:'white', fontWeight:'bold'}}>DISCOUNT CARD</Text></View>
          <View style={{marginTop:135,marginLeft:10,position:'absolute',backgroundColor:'red',width:299,height:35}}><Text style={{fontSize:17, color:'white'}}></Text></View>
          <View style={{marginTop:90,marginLeft:15,position:'absolute',backgroundColor:'#FCDD00',width:45,height:25,borderRadius:5}}><Text style={{fontSize:17, color:'white'}}></Text></View>
          <View style={{marginTop:112,marginLeft:12,position:'absolute',width:299,height:25,borderRadius:5}}><Text style={{fontSize:17}}>XXX XXX XXX 9791</Text></View>
          <View style={{marginTop:145,marginLeft:75,position:'absolute',width:299,height:25,borderRadius:5}}><Text style={{fontSize:10, color:'white'}}>EXPIRES END :</Text><View style={{marginLeft:70,marginTop:-18}}><Text>02/22</Text></View></View>
          <View style={{marginTop:155,marginLeft:225,position:'absolute',width:299,height:25,borderRadius:5}}><Text style={{fontSize:20, color:'blue',fontWeight:'bold'}}>VISA</Text></View>
          
          <View style={{position:'absolute',backgroundColor:'black',marginTop:240,marginLeft:8,width:299}}><Text>00</Text></View>
          <View style={{position:'absolute',marginTop:223,marginLeft:14,width:299}}><Text style={{fontSize:10}}>Refer to Issuer for Conditions of use</Text></View>
          <View style={{position:'absolute',marginTop:260,marginLeft:14,width:299}}><Text style={{fontSize:8}}>AUTHORISED SIGNATURE  NOT VALID UNLESS SIGNED</Text></View>
          <View style={{marginTop:315,marginLeft:15,position:'absolute',backgroundColor:'gray',width:45,height:25,borderRadius:5}}><Text style={{fontSize:17, color:'white'}}></Text></View>
          <View style={{marginTop:335,marginLeft:15,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:12, color:'black'}}>XXX XXX XX42</Text></View>
          <View style={{marginTop:350,marginLeft:15,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:8, color:'black'}}>Client Identification</Text></View>
          <View style={{marginTop:278,marginLeft:235,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:8, color:'black', fontWeight:'bold'}}>Card Enquiries:</Text></View>
          <View style={{marginTop:287,marginLeft:177,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>Card to be returned to UBA Benin if found,</Text></View>
          <View style={{marginTop:293,marginLeft:233,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>Call +229 95631835</Text></View>
          <View style={{marginTop:299,marginLeft:201,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>Email: cfcbenin@ubagroup.com</Text></View>
          <View style={{marginTop:305,marginLeft:187,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>digitalbanking-benin@ubagroup.com</Text></View>
          <View style={{marginTop:311,marginLeft:205,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>discountcard.club@gmail.com</Text></View>
          <View style={{marginTop:318,marginLeft:195,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>+229 21154911 / +229 64269736</Text></View>
          <View style={{marginTop:325,marginLeft:141,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>This card is ussued by United Bank for Africa pursuant</Text></View>
          <View style={{marginTop:331,marginLeft:139,position:'absolute',height:25,borderRadius:5}}><Text style={{fontSize:6, color:'black'}}>to a license from Visa International Service Association</Text></View>
          <View style={{marginTop:280,marginLeft:15,position:'absolute',height:25,borderRadius:5,backgroundColor:'#FCDD00',width:115}}><Text style={{fontSize:6}}></Text></View>
          <View style={{marginTop:283,marginLeft:130,position:'absolute',height:25,borderRadius:5,width:50}}><Text style={{fontSize:6, color:'black',fontSize:12}}>XXX</Text></View>
          <View style={{marginTop:353,marginLeft:130,position:'absolute',height:25,borderRadius:5}}><Text style={{color:'red',fontSize:8, fontWeight:'bold'}}>Discount CARD</Text></View>

      </ScrollView>
    );
  }
}

class DepotViewSucess extends Component {
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:50}}><Image id='depot' source={require('../assets/icons/depôt_dpay.png')} style={{width:75,height:75}}  resizeMode='contain'/></View>
          <View><Text style={{color:'white', marginLeft:10, fontSize:16, marginTop:15}}>Cher(e) client(e), votre dépôt de 350 000 FCFA sur votre compte ce Vendredi 31 Janvier 2020 à 15h02min42s effectué avec succès ! #DPay</Text></View>
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
  inputcardwithdata:{
    backgroundColor:'white',
    borderRadius:15,
    alignItems:'center',
    marginBottom:25,
    marginTop:8,
    width:300,
    height:150,
    marginLeft:8,
    // position:'absolute'
  },
  inputdateexpir:{
    backgroundColor:'white',
    borderRadius:27,
    alignItems:'center',
    marginBottom:25,
    marginTop:8,
    width:95,
    marginLeft:8,
    flexDirection:'row',
    justifyContent:'space-around'
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
  btnAll:{
    borderRadius:27,
    width:150,
    marginRight:-19
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

MyRechargementHome: {
  screen: RechargementScreen, 
  navigationOptions:({navigation})=>({
  title :'Mes Rechargements',
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
},

MyDepotSucess: {
  screen: DepotViewSucess, 
  navigationOptions:({navigation})=>({
  title :'Depôt Effectué',
      })
},


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




