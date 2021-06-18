import {createStackNavigator} from 'react-navigation-stack'; 
import Home from '../screens/home';
import Review from '../screens/reveiwDetails';
import About from '../screens/about';
import Header from '../shared/header.js';
import React from 'react';

const screens={
    About:{
        screen:About,
   navigationOptions:({navigation})=>{
            return (
                {
            headerTitle:()=><Header navigation={navigation}/>
   
        }
            )
        }
    },
 
}
const aboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#444",
         headerStyle:{
                backgroundColor:"#ddd",height:80
            }
    }
});

export default aboutStack