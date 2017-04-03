import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableHighlight} from 'react-native';
import {COLOR,TOUCH_COLOR} from '../../globa/colors';
export default (props)=>(
    <TouchableHighlight underlayColor={TOUCH_COLOR} onPress={props.onSelect} activeOpacity={0.9}>
        <View style={style.contain}>
            <Image source={{uri:props.uri}} style={style.image}/>
            <View style={style.TextBox}>
                <Text numberOfLines={1} style={style.font} >{props.title}</Text>
                <Text numberOfLines={1} style={[style.font,style.fontT]} >{props.author}</Text>
                <Text numberOfLines={1} style={[style.font,style.fontT]} >{props.content}</Text>
                <Text numberOfLines={1} style={[style.font,style.fontT]} >标签: {props.tags}</Text>
                <Text numberOfLines={1} style={[style.font,style.fontT]}>价格: {props.price}</Text>
            </View>
        </View>
    </TouchableHighlight>
)

const style = StyleSheet.create({
    contain:{
        flex:1,
        flexDirection:"row",
        padding:10,
        borderBottomWidth:1,
        borderColor:"#f0f0f0",
        borderStyle:"solid"
    },
    image:{
        width:85,
        height:124
    },
    TextBox:{
        flex:1,
        paddingLeft:15,
        paddingRight:15
    },
    font:{
        fontSize:12,
        color:"#555",
    },
    fontT:{
        lineHeight:25
    }
});