import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Review from '../screens/reveiwDetails';
import Header from '../shared/header.js';
import React from 'react';

const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return (
                {
                    
            headerTitle:()=><Header  navigation={navigation} title="MovieDekho" />
   
        }
            )
        }
    },
    ReviewDetails:{
        screen:Review,
        navigationOptions:({navigation})=>{
            return (
                {
                    
            headerTitle:()=><Header  navigation={navigation} title="Review Details" 
            />
   
        }
            )
        }
    }
}
const homeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#444",
         headerStyle:{
                backgroundColor:"#eee",height:80,
      
            },
            headerTitleContainerStyle:{
                left:0,right:0,top:0,bottom:0
            }
    }
});

export default homeStack