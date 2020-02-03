import React, { Component} from 'react';
import {Button,Text, Input,Avatar, Icon,ListItem,Divider} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {View ,Image,StyleSheet,FlatList, ImageBackground, TextInput,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';


class depotItem extends React.Component{
    render(){
      return  (
        <View style={styleDepot.main_container}>
        </View>
        )
    }
}

const styleDepot = StyleSheet.create({
    main_container:{
        backgroundColor:'white',
        height:75
    }
})

export default depotItem