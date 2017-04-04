import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
// import { BlurView } from 'react-native-blur';
const style =StyleSheet.create({
    headerStyle:{
        backgroundColor:"#222",
        height:44
    },
    titleStyle:{
        fontSize:13,
        color:"#fff"
    }
});
export default class MovieDet extends Component {
    static navigationOptions = {
        title:"超级幼儿园", 
        header:{
            style:style.headerStyle,
            titleStyle:style.titleStyle,
            tintColor:"#fff"
        }
    }
    render(){
        let {params } = this.props.navigation.state;
        let uri = "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2404720316.jpg"; 
        return(
            <View style={{height:200}}>
                <Text>xxxxx</Text>
                <Image source={{uri:uri}} style={{height:200,resizeMode:Image.resizeMode.cover}}>
                    <Text>xxx</Text>
                </Image>
            </View>
        )
    }
} 

// <BlurView 
//                          blurRadius={50}
//                          downsampleFactor={15}
//                          overlayColor={'#fff'}
//                          style={{position: "absolute",left: 0,top: 0,bottom: 0,right: 0}}
//                          />
//                          <Text >asdasdasdasdasdasdasd</Text>