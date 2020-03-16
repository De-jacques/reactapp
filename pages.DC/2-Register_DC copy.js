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
import {Formik} from 'formik';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
        nom:'',
        prenoms:'',
        email:'',
        password:'',
        cf_password:'',
    }
  }

  validate_form=()=>{
    const{nom,prenoms,email,password,cf_password} = this.state
    if(nom ==""){
      alert("rentrez votre nom");
      return false;
    }
    else if (prenoms=="") {
      alert("renseigner votre prenom");
    }
    else if(email==""){
      alert("renseigner une adresse e-mail valide");
    }
    else if(password==""){
      alert("renseigner un mot de passe");
    }
    else if(password != cf_password){
      alert("les mots de passes ne sont pas identiques");
    }
  }

  render() {
    return (  
      <ScrollView style={styles.containerDefault}>
      <View >
        <View style={styles.logoPay}>
          <Text h4 style={{color:'white'}}>Discount</Text>
          <Text h4 style={{color:'#FCDD00'}}>Pay</Text>
        </View>
        <View style={styles.imageLogin}>
          <Image  source={require('../assets/images/register.jpg')} style={{width:250,}}  resizeMode='contain'/>
          </View>
        <View style={styles.containerForm}>
          <View style={styles.inputBox}>
            <TextInput id="nom" onChangeText={(value)=> this.setState({nom:value})} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='nom'/> 
          </View>
          <View>
            <Text id="error_nom" style={{color:'#FCDD00',marginTop:-22,marginLeft:-130, fontSize:11}}>veuillez renseigner votre nom</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput id="prenoms" onChangeText={(value)=> this.setState({prenoms:value})} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='prenoms'/> 
          </View>
          <View>
            <Text id="error_prenoms" style={{color:'#FCDD00',marginTop:-22,marginLeft:-115, fontSize:11}}>veuillez renseigner votre prenoms</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput id="email" onChangeText={(value)=> this.setState({email:value})} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='email'/> 
          </View>
          <View>
            <Text id="error_email" style={{color:'#FCDD00',marginTop:-22,marginLeft:-62, fontSize:11}}>veuillez renseigner une adresse e-mail valide</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput id="password" onChangeText={(value)=> this.setState({password:value})} type='password' secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='mot de passe'/> 
          </View>
          <View>
            <Text id="error_pwd" style={{color:'#FCDD00',marginTop:-22,marginLeft:-78, fontSize:11}}>veuillez renseigner votre mot de passe</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput id="cf_password" onChangeText={(value)=> this.setState({cf_password :value})} type='password' secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='confirmer mot de passe'/> 
          </View>
          <View>
            <Text id="error_cf_pwd" style={{color:'#FCDD00',marginTop:-22,marginLeft:-75, fontSize:11}}>veuillez confirmer votre mot de passe</Text>
          </View>
          <View>
        {/* <Text>{"nom ==>"+this.state.nom}</Text> 
        <Text>{"prénoms ==>"+this.state.prenoms}</Text> */}
          </View>
          
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
            <Button onPress={()=>this.validate_form()} 
          id="register"   
            title='Inscription'  
            ViewComponent={LinearGradient} 
            linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/>
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






