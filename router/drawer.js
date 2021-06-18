import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import aboutStack from './aboutStack';
import homeStack from './homeStack';
import Constants from 'expo-constants';

const RootDrawNavigator=createDrawerNavigator({
    Home:{
        screen:homeStack,
   
    },
    About:{
        screen:aboutStack
    }

},{
    headerTitleContainerStyle:{
        paddingTop:100
    }
});

export default createAppContainer(RootDrawNavigator);