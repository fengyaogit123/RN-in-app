import React from 'react';
import {View,Image,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {COLOR} from "../../globa/colors";
export default ()=>(
    <View style={style.commentContain}>
        <View style={style.commentSubContain}>
            <Text style={style.commentHText}>短评</Text>
            <TouchableHighlight style={style.commentHBtn} underlayColor="#fff"  onPress={()=>alert(1)}>
                <Text style={style.commentHBtnText}>发短评</Text>
            </TouchableHighlight>
        </View>
        <View style={style.mainBox}>
            <Text style={style.mainText}>还没有评论,快来沙发!</Text>
        </View>
    </View>
)

const style=StyleSheet.create({
    commentContain:{
        backgroundColor:"#fff"
    },
    commentSubContain:{
        height:44,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:"#f0f0f0",
        borderStyle:"solid",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10
    },
    commentHText:{
        fontSize:12,
        color:"#555"
    },
    commentHBtn:{
        height:30,
        borderRadius:50,
        borderColor:COLOR,
        borderStyle:"solid",
        borderWidth:1,
        justifyContent:"center",
        paddingLeft:10,
        paddingRight:10
    },
    commentHBtnText:{
        fontSize:12,
        color:COLOR
    },
    mainBox:{
        justifyContent:"center",
        height:50
    },
    mainText:{
        textAlign:"center",
        fontSize:12,
        color:"#555"
    }
})