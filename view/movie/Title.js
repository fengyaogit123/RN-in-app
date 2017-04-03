import React from 'react';
import {StyleSheet,View,Text} from "react-native";
//小标题
export default (props)=>(
    <View style={style.titleContain}>
        <View style={style.titleLine}></View>
        <View style={style.titleFontBox}>
            <Text style={style.titleFont}>{props.label}</Text>
        </View>
        <View style={style.titleLine}></View>
    </View>
)

const style = StyleSheet.create({
    titleContain:{
        flexDirection:"row",
        paddingLeft:15,
        paddingRight:15,
        marginBottom:20,
        marginTop:20,
        backgroundColor:"#fff"
    },
    titleLine:{
        flex:1,
        height:1,
        backgroundColor:"#f0f0f0",
        marginTop:8
    },
    titleFontBox:{
        flex:1,
        backgroundColor:"#fff"
    },
    titleFont:{
        textAlign:"center",
        color:"#888"
    }
})