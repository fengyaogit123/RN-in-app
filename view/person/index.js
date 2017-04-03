import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SERVER_PATH} from '../../globa/base';
import {COLOR,TOUCH_COLOR} from '../../globa/colors';


const List =(props)=>(
    <View style={style.listContain}>
        {props.list.map((item,index)=>(
            <TouchableHighlight key={index}  underlayColor={TOUCH_COLOR} onPress={item.onSelect} activeOpacity={0.9}>
                <View  style={style.itemContain}>
                    <Icon name={item.icon.name} size={28} color={item.icon.color} />
                    <Text style={style.itemFont}>{item.label}</Text>
                    <Text style={style.itemBage}>{item.number}</Text>
                </View>
            </TouchableHighlight>
        ))}
    </View>
);
export default class Person extends Component {

    render(){
        let dataList = [
            {
                icon:{
                    name:"ios-heart",
                    color:"#71C671"
                },
                label:"我的收藏",
                number:0,
                onSelect:()=>(alert(1))
            },
            {
                icon:{
                    name:"ios-photos",
                    color:"#FF7F50"
                },
                label:"我的评论",
                number:0,
                onSelect:()=>(alert(2))
            },
            {
                icon:{
                    name:"ios-people",
                    color:COLOR
                },
                label:"退出登录",
                number:0,
                onSelect:()=>(alert(3))
            }
        ];
        return(
            <View style={style.contain}>
                <View style={style.bgBox}>
                    <Image style={style.bgHeadImg} source={{uri:`${SERVER_PATH}/user/0.24706140869998983.jpg`}} />
                    <Text style={style.bgUserName} >小张</Text>
                </View>
                <View style={style.contentBox}>
                    <List list={dataList} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:"#fff"
    },
    bgBox:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:20,
        alignItems:"center",
        backgroundColor:COLOR
    },
    bgHeadImg:{
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:50,
        width:65,
        height:65,
        resizeMode:Image.resizeMode.cover
    },
    bgUserName:{
        textAlign:"center",
        fontSize:12,
        color:"#fff",
        marginTop:10
    },
    contentBox:{
        flex:2,
        backgroundColor:"#f5f5f5"
    },
    listContain:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#fff",
        marginTop:10
    },
    itemContain:{
        flexDirection:"row",
        height:50,
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#f0f0f0",
        borderStyle:"solid"
    },
    itemFont:{
        flex:1,
        paddingLeft:15,
        fontSize:13
    },
    itemBage:{
        width:20,
        height:20,
        borderRadius:35,
        backgroundColor:"#FF0000",
        fontSize:12,
        color:"#fff",
        textAlign:"center",
        alignItems:"center"
    }
});