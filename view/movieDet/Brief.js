import React from 'react';
import {View,Image,Text,StyleSheet,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default (props)=>(
    <View style={style.briefContain}>
        <View style={style.brieSubContain} >
            <View style={style.briefImgBox} >
                <Image source={{uri:props.uri}} style={style.brieImg} />
            </View>                    
            <View style={style.brieTextBox}>
                <Text style={[style.brieText]}>{props.title}</Text>
                <Text style={[style.brieText,style.brieTextN]}>{props.original_title}</Text>
                <Text style={[style.brieText,style.brieTextN]}>星星</Text>
                <Text style={[style.brieText,style.brieTextN]}>{props.tags}</Text>
            </View>
        </View>
        <View style={style.brieBtnsBox}>
            <TouchableHighlight style={[style.brieBtn,style.btnRight]} underlayColor="rgba(255,255,255,0.2)" onPress={()=>alert(1)}>
                <View style={style.brieBtnSub}>
                    <Icon name="ios-heart" size={20} color="rgba(255,255,255,0.85)" />
                    <Text style={style.brieBtnText}>收藏</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={[style.brieBtn,style.btnLeft]} underlayColor="rgba(255,255,255,0.2)" onPress={()=>alert(1)}>
                <View style={style.brieBtnSub}>
                    <Icon name="ios-paper" size={20} color="rgba(255,255,255,0.85)" />
                    <Text style={style.brieBtnText}>评论</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>
)

const style=StyleSheet.create({
    briefContain:{
        height:210,
        backgroundColor:"#222",
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15
    },
    brieSubContain:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    brieImgBox:{
        width:97,
        height:142,
        borderColor:"#fff",
        borderStyle:"solid",
        borderWidth:1
    },
    brieImg:{
        width:95,
        height:140,
        resizeMode:Image.resizeMode.contain
    },
    brieTextBox:{
        flex:1,
        paddingLeft:20
    },
    brieText:{
        color:"#fff",
        fontSize:12
    },
    brieTextN:{
        lineHeight:26
    },
    brieBtnsBox:{
        height:30,
        flexDirection:"row",
        marginTop:10,
    },
    brieBtn:{
        flex:1,
        paddingRight:5,
        flexDirection:"row",
        borderColor:"rgba(255,255,255,0.08)",
        borderWidth:1,
        borderStyle:"solid",
        borderRadius:4,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0.1)"
    },
    btnLeft:{
        marginLeft:8
    },
    btnRight:{
        marginRight:8
    },
    brieBtnSub:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    brieBtnText:{
        color:"#fff",
        fontSize:12,
        paddingLeft:5
    }
})