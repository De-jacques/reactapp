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
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/fr';
 class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'date',
      show: false,
      date: moment().toDate(),
    }
    this.show = this.show.bind(this);
    this.setDate = this.setDate.bind(this);
  }
  setDate(event, date) {
    date = date || this.state.date;
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
    });

    if (this.state.mode === 'date') {
      this.setState({
        taskDetails: {
          ...this.state.taskDetails,
          startDate: date,
        },
      });
      /*     this.setState({
        date: date,
      }); */
      this.timepicker();
    }
    // alert(`${moment(this.state.taskDetails.startDate).get('hour')} ${moment(this.state.taskDetails.startDate).get('minute')}`  )

    if (this.state.mode === 'time') {
      var up = moment(this.state.taskDetails.startDate).set({
        hour: moment(date).get('hour'),
        minute: moment(date).get('minute'),
      });
      // alert(moment(up).toDate());

      this.setState({
        taskDetails: {
          ...this.state.taskDetails,
          startDate: moment(up).toDate(),
        },
        date: moment(up).toDate(),
      });
    }
  }

  show(mode) {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker() {
    this.show('date');
  }

  timepicker() {
    this.show('time');
  }
  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
          <View style={styles.logoPay}>
            <Text h4 style={{color:'white'}}>Discount</Text>
            <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
          </View>
          <View style={styles.headerCompte}>
            {/* <Text style={{color:'white', fontSize:25}}>John DOE</Text>
            <Text style={{color:'white', fontSize:20}}>4 325 856 FCFA</Text> */}
            <Icon type='entypo' name='eye-with-line' color='white'/>
            {show && (
                  <DateTimePicker
                    value={taskDetails.startDate}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate}
                  />
                )}
          </View>
          <View style={styles.OptionsCompteOne}>
            <TouchableOpacity activeOpacity = { .5 }  onPress={this.datepicker}>
              <Image  id='releve' source={require('../assets/icons/relev_dpay_white.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={{}}>
              <Image id='depot' source={require('../assets/icons/depôt_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={{}}>
              <Image id='retrait'  source={require('../assets/icons/retrait_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',}}>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Relevé</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Depôt</Text>
            <Text style={{color:'white', fontSize:18,marginEnd:26,marginStart:40}}>Retrait</Text>
            </View>

          <View style={styles.OptionsCompteTwo}>
          <TouchableOpacity activeOpacity = { .5 } onPress={this.callFun}>
            <Image   source={require('../assets/icons/transfert_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { .5 } onPress={this.callFun}>
            <Image   source={require('../assets/icons/recompense_dpay.png')} style={{width:75,height:75,marginEnd:15,marginStart:20}}  resizeMode='contain'/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { .5 } onPress={this.callFun}>
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
        <Button onPress={() => {alert('super');}} buttonStyle={styles.buttons} ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} title='Modifiez Profil'></Button>
      </View>
      <DrawerItems
      style={{color:'white',}}
       {...props} />
    </SafeAreaView>
  </ScrollView>
)
const DrawerNavigator = createDrawerNavigator({
  MyAccount: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
    title :'Mon Compte',
    drawerIcon:<Icon type='antdesign'  name='user' rounded reverse color='black'/>,
        }),
},
  Transaction: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
      drawerIcon:<Icon type='material-community' name='cash-multiple' rounded reverse color='white'/>,
      title:'Transactions',
      tintColor:'white',
    })
  },
  Bonus: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
      title:'Bonus',
      drawerIcon:<Icon containerStyle='white' type='material-community' name='sack' rounded reverse color='white'/>
    })
  },
  Parametres: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
      title:'Paramètres',
      drawerIcon:<Icon type='antdesign' name='setting' rounded reverse color='white'/>,
    })
  },
  Deconnexion: {
    screen: MyAccount,
    navigationOptions:({navigation})=>({
      title:'Deconnexion',
      drawerIcon:<Icon type='feather' name='power' rounded reverse color='black'/>,
    })
  },
},{drawerBackgroundColor:'red',
contentComponent:CustomDrawerContentComponent});
export default createAppContainer(DrawerNavigator);




