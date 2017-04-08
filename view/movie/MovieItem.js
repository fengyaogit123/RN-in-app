import React from 'react';
import {View,Image,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {COLOR,TOUCH_COLOR} from '../../globa/colors';
//子项
export default  MovieItem = (props)=>(
    
        <View style={[style.itemBox,(props.horizontal?style.horizontal:style.noHorizontal),(props.boxStyle?props.boxStyle:{})]} >
            <TouchableHighlight underlayColor={TOUCH_COLOR} onPress={props.onSelect} activeOpacity={0.9}>
                <Image style={[style.itemImg,(props.imgStyle?props.imgStyle:{})]} source={{uri:props.uri}} />
            </TouchableHighlight>
            <Text numberOfLines={1} style={style.itemFont} >{props.title}</Text>
        </View>
    
)

const style = StyleSheet.create({
    itemBox:{
        paddingTop:10,
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
