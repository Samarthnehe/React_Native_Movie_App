import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function Card(props){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent} >
                     {props.children}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:"#FFF",
        shadowOffset:{width:2,height:2},
        shadowColor:"#333",
        shadowOpacity:0.6,
        marginHorizontal:4,
        marginVertical:15,
        shadowRadius:2,
        height:250,
        backgroundColor:"#EAEAEA"

    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:15,

    }
})