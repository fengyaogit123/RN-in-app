import React from 'react';
import {View,Image,Text,StyleSheet,TouchableHighlight,ScrollView} from 'react-native';
import MovieItem from '../movie/MovieItem';
export default (props)=>(
    <View style={style.castContain} >
            <ScrollView horizontal={true}>
                    {props.casts.map((cast,index)=>(
                        <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                            title={cast.title} 
                            uri={cast.uri} 
                            onSelect={()=>1}
                            key={index}
                        /> 
                    ))}
                
            </ScrollView>
        </View>
)
const style=StyleSheet.create({
    castContain:{
        borderBottomWidth:1,
        borderColor:"#ccc",
        borderStyle:"solid",
        paddingTop:10,
        marginBottom:20,
        backgroundColor:"#fff",
        marginTop:20
    },
})