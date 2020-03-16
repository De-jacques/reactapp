/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import {Button,Text, Input} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View ,Image,StyleSheet, SafeAreaView,ImageBackground, TextInput,ScrollView, Picker } from 'react-native';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required()
// });
export default class App extends Component {

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
          <View style={styles.inputBox}>
            <TextInput id="prenoms" onChangeText={(value)=> this.setState({prenoms:value})} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='prenoms'/> 
          </View>
          <View style={styles.inputBox}>
            <TextInput id="email" onChangeText={(value)=> this.setState({email:value})} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='email'/> 
          </View>
          <View style={styles.inputBox}>
            <TextInput id="password" onChangeText={(value)=> this.setState({password:value})} type='password' secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='mot de passe'/> 
          </View>
          <View style={styles.inputBox}>
            <TextInput id="cf_password" onChangeText={(value)=> this.setState({cf_password :value})} type='password' secureTextEntry={true} style={{borderRadius:27, width:300, marginLeft:25}} placeholder='confirmer mot de passe'/> 
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
            {/* <Button onPress={()=>this.validate_form()} 
          id="register"   
            title='Inscription'  
            ViewComponent={LinearGradient} 
            linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons}/> */}
          </View>
        </View>
      </View>
        
      </ScrollView>
      // <SafeAreaView style={styles.containerDefault}>
      //   <Formik
      //     initialValues = {{name:""}}
      //     onSubmit={(values,actions) =>{
      //       alert(JSON.stringify(values));
      //     setTimeout(() => {
      //       actions.setSubmitting(false);
      //     }, 1000);
      //     }}
      //     validationSchema = {validationSchema}
      //     >
      //     {formikProps =>(
      //       <React.Fragment>
      //         <View style={styles.inputBox}>
      //         <TextInput style={{borderRadius:27, width:300, marginLeft:25}} onChangeText={formikProps.handleChange("name")}/>
      //     <Text style={{color:'#FCDD00'}}>{formikProps.errors.name}</Text>
      //         </View>
      //         <View style={styles.btnLogin}>
      //         <Button  id="register" onPress={formikProps.handleSubmit}  title='Inscription'  ViewComponent={LinearGradient} linearGradientProps={{colors:['#fff','#CF1111']}} buttonStyle={styles.buttons} />
      //         </View>
      //       </React.Fragment>
      //     )}
      //   </Formik>
      // </SafeAreaView>
    )
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






