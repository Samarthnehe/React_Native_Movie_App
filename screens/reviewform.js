import React from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema=yup.object({
    title:yup.string().required().min(4),
    body:yup.string().required().min(30),
    rating:yup.string().required().test('is-num-1-5',"Rating must be a number 1-5",(val)=>{
        return parseInt(val)<6 && parseInt(val)>0;
    }),
    image:yup.string().required()
})

export default function ReviewForm({addRev}){
    return (
        <View style={globalStyles.container}>
                <Formik 
                validationSchema={ReviewSchema}
                initialValues={{title:"",body:"",rating:"",image:""}}
                onSubmit={(values,actions)=>{
                    actions.resetForm();
                    addRev(values);
                       
                }}
                
                >
                    {(props)=>(
                        <View style={styles.border}>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Review Title"
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                              <TextInput
                                multiline minHeight={100}
                                style={globalStyles.input}
                                placeholder="Review Body"
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                     onBlur={props.handleBlur('body')}
                            />
                                <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                              <TextInput
                                style={globalStyles.input}
                                placeholder="Review Rating"
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType="numeric"
                                onBlur={props.handleBlur('rating')}
                            />
                                <Text style={globalStyles.errorText}>{props.touched.body && props.errors.rating}</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Review Image"
                                onChangeText={props.handleChange('image')}
                                value={props.values.image}
                                 onBlur={props.handleBlur('image')}
                            />
                                <Text style={globalStyles.errorText}>{props.touched.image && props.errors.image}</Text>
                           <FlatButton text="submit" onPress={props.handleSubmit} />
                        </View>

                    )}
                </Formik>
        </View>
    )
}

const styles=StyleSheet.create({
   border:{
       borderColor:"white",
       borderWidth:2,
       padding:10,
       borderRadius:5,
       borderStyle:"dashed"
   }
})