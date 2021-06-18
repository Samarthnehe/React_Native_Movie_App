import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

export default function FlatButton({text,onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                <Text style={styles.buttonText} >{text}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
   button:{
       borderRadius:8,
       paddingVertical:14,
       paddingHorizontal:10,
       backgroundColor:"#0275d8"
   },
   buttonText:{
       color:"white",
       fontWeight:"700",
       textTransform:"uppercase",
       fontSize:16,
       textAlign:"center"
   }
})