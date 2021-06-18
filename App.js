import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './router/drawer';

const getFonts=()=> Font.loadAsync({
    'mont-bold':require("./fonts/Montserrat-Bold.ttf"),
    'mont-regular':require('./fonts/Montserrat-Regular.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      < AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
      onError={console.warn()}
      
      />


    )
  }

}

