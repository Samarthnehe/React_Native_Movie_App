import React from 'react';
import {StyleSheet,View,Text,Button,Image} from 'react-native';
import {globalStyles,images} from '../styles/global';
import Card from '../shared/card';

export default function Review({navigation}){

    const rating =navigation.getParam('rating');
    const goback=()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
             <Card>
                <Text style={styles.head} >{navigation.getParam('title')}</Text>
                <Text style={styles.desc}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                            <Text>GameZone Rating:</Text>
                            <Image source={images.ratings[rating]}/>
                </View>
             </Card>
             <Button title="Go Back" onPress={()=>navigation.goBack()} style={styles.button}/>
 
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:24,
        minHeight:"100vh"
    },
    rating:{
        flexDirection:"row",
        justifyContent:"center",
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:"#eee"
    },
    button:{
        marginVertical:40,
        
    },
    head:{
        fontWeight:"700",
        textAlign:"center",
        fontSize:24
    },
    desc:{
        marginVertical:15
    }

})