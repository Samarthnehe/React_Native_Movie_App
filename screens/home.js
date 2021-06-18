import React,{useState} from 'react';
import {StyleSheet,View,Text,Button,FlatList,TouchableOpacity,Modal,Image,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewform';


export default function Home({navigation}){
    
    const [modal,setModal]=useState(false);
    const [reviews,setReviews]=useState([
        {src:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG",title:"3 Idiots",rating:5,body:"In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.",key:'1'},
        {src:"https://static.toiimg.com/thumb/msid-65653642,width-1200,height-900,resizemode-4/.jpg",title:"Chak De India",rating:4,body:"Kabir Khan, a former hockey star, is tainted as someone who betrayed his country. However, he begins coaching the Indian women's national hockey team to prove his loyalty to the nation.",key:'2'},
        {src:"https://m.media-amazon.com/images/M/MV5BMjAyNzk3NjQ4MV5BMl5BanBnXkFtZTcwMzU2MjE5Mg@@._V1_.jpg",title:"Blue",rating:3,body:"Sagar, Sam and Aarav decide to dive underwater to find treasure in a sunken ship in order to help Sam clear his debt. However, one of them has a hidden agenda of his own.",key:'3'},
         {src:"https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/3/32/2d8957a0c79c11e69992e7790d732476_1583325983478_l_medium.jpg",title:"Table No. 21",rating:3,body:"Vivaan and Siya, a couple bored with their married life, enter a game show to win an attractive prize. However, the activity soon turns into a dangerous game of survival.",key:'4'},
          {src:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",title:"Avengers- Endgame",rating:3,body:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",key:'5'},
           {src:"https://i.redd.it/sxku63s49jg61.jpg",title:"Kingkong vs Cheems",rating:3,body:"Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe",key:'6'}
    ]);

    const addRev=(review)=>{
        review.key=Math.random().toString();
        setReviews((current)=>{
            return [review,...current]
        });
        setModal(false);
    }

    const pressHandler=()=>{
        navigation.navigate('ReviewDetails');
    }
    return (
        <View style={globalStyles.container}>
                <Modal transparent backdropColor="0.9" visible={modal} style={styles.modal}  >
                        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                                <View style={styles.modalView} >
                                        <MaterialIcons name="close" size={24} style={{...styles.modalToggle,...styles.modalClose}} onPress={()=>setModal(false)}/>
                                        <ReviewForm addRev={addRev}/>
                            </View>
                        </TouchableWithoutFeedback>
                    
                </Modal>

                <MaterialIcons name="add" size={24} onPress={()=>setModal(true)} style={styles.modalToggle}/>

                <FlatList
                    data={reviews}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                                    <Card>
                                        <Image source={{uri:item.src}} style={styles.image}/>
    
                                        <Text style={{...globalStyles.title,...styles.titles}}>{item.title}</Text>
                                    </Card>
                        </TouchableOpacity>
                    )}
                
                />
        </View>
    )
}


const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:"transparent",
        borderRadius:10,
        padding:10,
        alignSelf:"center",
        backgroundColor:"transparent"
    },
    image:{
            width:'100%',
            height:'90%',
            borderRadius:6,
            borderWidth:3,
            borderColor:"black"
            
    },
   

    modalView:{
        backgroundColor:"grey",
        flex:1
        
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    },
    titles:{
        color:"#000"
    }


})