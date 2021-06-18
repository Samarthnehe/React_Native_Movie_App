import {StyleSheet} from 'react-native'

export const globalStyles=StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
     title:{
        fontSize:20,
        fontFamily:"mont-bold",
        color:"#333"
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20
    },
    input:{
        backgroundColor:"#FFF",
        padding:10,
        marginVertical:10,
        color:"#000",
        fontSize:14,
        borderRadius:6
    },
    errorText:{
        color:"yellow",
        fontWeight:"700",
        marginBottom:10,
        marginTop:6,
        textAlign:"center"
    }
})


export const images={
    ratings:{
        '1':require("../assets/rating-1.png"),
        '2':require("../assets/rating-2.png"),
        '3':require("../assets/rating-3.png"),
        '4':require("../assets/rating-4.png"),
        '5':require("../assets/rating-5.png"),
    }
}