/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text, Input} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View ,Image,StyleSheet, ImageBackground, TextInput,ScrollView, Picker } from 'react-native';
export default class App extends Component {
// function test(params) {
  
// }
constructor(props){
  super(props);
  this.state={
    register:{
      nom:'',
      prenoms:'',
      email:'',
      password:'',
      cf_password:'',
    },
    tryToRegister:false,
  }
}
  render() {
    const {register, tryToRegister} = this.state;
    return (  
      <ScrollView style={styles.containerDefault}>
      <View>
        <View style={styles.logoPay}>
          <Text h4 style={{color:'white'}}>Discount</Text>
          <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
        </View>
        <View style={styles.imageLogin}>
          <Image  source={require('../assets/images/register.jpg')} style={{width:250,}}  resizeMode='contain'/>
          </View>
        <View style={styles.containerForm}>
          <View style={styles.inputBox}>
            <TextInput onChangeText={(nom)=>this.setState({...register,nom})}  style={{borderRadius:27, width:300, marginLeft:25}} placeholder='nom'/> 
          </View>
          {/*tryToRegister && register.nom.trim() == ""?*/} <Text id="error_nom" style={{color:'#FCDD00',marginTop:-22, marginLeft:-125, fontSize:11}}>veuillez renseigner votre nom</Text>:<Text></Text>
        
          <View style={styles.inputBox}>
            <TextInput id="prenoms" onChangeText={(prenom)=>this.setState({...register,prenom})}  style={{borderRadius:27, width:300, marginLeft:25}} placeholder='prenoms'/> 
          </View>
          tryToRegister && register.prenom.trim() == ""? <Text id="error_prenom" style={{color:'#FCDD00',marginTop:-22, marginLeft:-117, fontSize:11}}>veuillez renseigner votre prénom</Text>:<Text></Text>
        
          <View style={styles.inputBox}>
            <TextInput id="email" onChangeText={(email)=>{
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var emailtest =  re.test(email.toLowerCase());
                if(emailtest){
                  this.setState({...register,email})}
                }
            
             }
              style={{borderRadius:27, width:300, marginLeft:25}} placeholder='email'/> 
          </View>
          tryToRegister && register.email.trim() == ""? <Text id="error_email" style={{color:'#FCDD00',marginTop:-22, marginLeft:-67, fontSize:11}}>veuillez renseigner une adresse e-mail valide</Text>:<Text></Text>
          <View style={styles.inputBox}>
            <TextInput onChangeText={(password)=>this.setState({...register,password})} secureTextEntry={true} secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='mot de passe'/> 
          </View>
          tryToRegister && register.password.trim() == ""?   <Text style={{color:'#FCDD00',marginTop:-22, marginLeft:-75, fontSize:11}}>veuillez renseigner un mot de passe valide</Text>:<Text></Text>
    
          <View style={styles.inputBox}>
            <TextInput onChangeText={(cf_password)=>this.setState({...register,cf_password})} secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='confirmer mot de passe'/> 
          </View>
          tryToRegister && register.cf_password.trim() == "" && register.password.trim() !== register.cf_password.trim()?<Text id="error_cf_pwd" style={{color:'#FCDD00',marginTop:-22, marginLeft:-46, fontSize:11}}>les deux mots de passes ne sont pas identiques</Text>:<Text></Text>
        
          {/* <View style={[styles.pickerStyle,styles.inputBox]}>
          <Picker style={{borderRadius:27, width:300, marginLeft:25}} 
          selectedValue={this.state.country}
          onValueChange={(value,index)=>{
            this.setState({country:value})
          }}
          >
            <Picker.Item value='ci' label={'côte d\'ivoire'}/>
            <Picker.Item value='bénin' label='bénin'/>
            <Picker.Item value='togo' label='togo'/>
            <Picker.Item value='cm' label='cameroun'/>
            <Picker.Item value='ng' label='nigeria'/>
            <Picker.Item value='gh' label='ghana'/>
          </Picker>
          </View> */}
          <View style={styles.btnLogin}>
            {/* <Button  id="resgister"   title='Inscription'  ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/> */}
            <Button onPress={()=>{
        this.setState({
          tryToRegister:true
        })
              // alert('veuillez remplir correctement le formulaire');
            }
              } id="register"   title='Inscription'  ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
          </View>
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
   },
   pickerStyle:{
    
   }
});






