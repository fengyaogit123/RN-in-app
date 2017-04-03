import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

//子项
export default  MovieItem = (props)=>(
<View style={[style.itemBox,(props.horizontal?style.horizontal:style.noHorizontal)]} >
        <Image style={style.itemImg} source={{uri:props.uri}} />
        <Text numberOfLines={1} style={style.itemFont} >{props.title}</Text>
    </View>
)

const style = StyleSheet.create({
     itemBox:{
        paddingTop:10,
        height:180,
        marginBottom:20
    },
    noHorizontal:{
        width:"33.3333%"
    },
    horizontal:{
        width:115
    },
    itemImg:{
        height:140,
        marginBottom:10,
        resizeMode:Image.resizeMode.contain
    },
    itemFont:{
        textAlign:"center",
        fontSize:12,
        color:"#666",
        flex:1
    },
});
