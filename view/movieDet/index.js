import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieItem from '../movie/MovieItem';
import {COLOR} from "../../globa/colors";
// import { BlurView } from 'react-native-blur';

// 下次
// 1.封装抽象组件
// 2.增加按钮点击效果
// 3.增加数据显示
// 4.增加主页分页功能
// 5.增加上拉加载和下拉刷新
const hStyle=StyleSheet.create({
    headerStyle:{
        backgroundColor:"#222",
        height:44
    },
    titleStyle:{
        fontSize:13,
        color:"#fff"
    },
})
export default class MovieDet extends Component {
    static navigationOptions = {
        title:"超级幼儿园", 
        header:{
            style:hStyle.headerStyle,
            titleStyle:hStyle.titleStyle,
            tintColor:"#fff"
        }
    }
    render(){
        let {params } = this.props.navigation.state;
        let uri = "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2404720316.jpg"; 
        return(
            <ScrollView>
                {/*briefContain*/}
                <View style={style.briefContain}>
                    <View style={style.brieSubContain} >
                        <View style={style.briefImgBox} >
                            <Image source={{uri:uri}} style={style.brieImg} />
                        </View>                    
                        <View style={style.brieTextBox}>
                            <Text style={[style.brieText]}>超级幼儿园</Text>
                            <Text style={[style.brieText,style.brieTextN]}>超级幼儿园</Text>
                            <Text style={[style.brieText,style.brieTextN]}>星星</Text>
                            <Text style={[style.brieText,style.brieTextN]}>剧情</Text>
                        </View>
                    </View>
                    <View style={style.brieBtnsBox}>
                        <View style={style.brieBtn}>
                            <Icon name="ios-heart" size={20} color="rgba(255,255,255,0.85)" />
                            <Text style={style.brieBtnText}>收藏</Text>
                        </View>
                        <View style={style.brieBtn}>
                            <Icon name="ios-paper" size={20} color="rgba(255,255,255,0.85)" />
                            <Text style={style.brieBtnText}>评论</Text>
                        </View>
                    </View>
                </View>
                {/*mainContain*/}
                <View style={style.mainContain} >
                    <Text style={style.mainText}>
                          xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </Text>
                </View>
                {/*castContain*/}
                <View style={style.castContain} >
                    <ScrollView horizontal={true}>
                            <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                                title={"xxxxx"} 
                                uri={uri} 
                                onSelect={()=>alert(1)}
                            /> 
                            <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                                title={"xxxxx"} 
                                uri={uri} 
                                onSelect={()=>alert(1)}
                            /> 
                            <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                                title={"xxxxx"} 
                                uri={uri} 
                                onSelect={()=>alert(1)}
                            /> 
                            <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                                title={"xxxxx"} 
                                uri={uri} 
                                onSelect={()=>alert(1)}
                            /> 
                            <MovieItem {...this.props} horizontal="true" boxStyle={{width:80}} imgStyle={{height:100}}
                                title={"xxxxx"} 
                                uri={uri} 
                                onSelect={()=>alert(1)}
                            /> 
                    </ScrollView>
                </View>
                {/*commentContain*/}
                <View style={style.commentContain}>
                    <View style={style.commentSubContain}>
                        <Text style={style.commentHText}>短评</Text>
                        <View style={style.commentHBtn}>
                            <Text style={style.commentHBtnText}>发短评</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:"center",height:50}}>
                        <Text style={{textAlign:"center",fontSize:12,color:"#555"}}>还没有评论,快来沙发!</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
} 
const style =StyleSheet.create({
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
        height:35,
        flexDirection:"row",
        marginTop:10
    },
    brieBtn:{
        flex:1,
        paddingRight:5,
        flexDirection:"row",
        marginRight:8,
        borderColor:"rgba(255,255,255,0.08)",
        borderWidth:1,
        borderStyle:"solid",
        borderRadius:4,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0.1)"
    },
    brieBtnText:{
        color:"#fff",
        fontSize:12,
        paddingLeft:5
    },
    mainContain:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderColor:"#ccc",
        borderStyle:"solid"
    },
    mainText:{
        fontSize:12,
        color:"#555",
        lineHeight:26
    },
    castContain:{
        borderBottomWidth:1,
        borderColor:"#ccc",
        borderStyle:"solid",
        paddingTop:10,
        marginBottom:20,
        backgroundColor:"#fff",
        marginTop:20
    },
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
    }
});

// <BlurView 
//                          blurRadius={50}
//                          downsampleFactor={15}
//                          overlayColor={'#fff'}
//                          style={{position: "absolute",left: 0,top: 0,bottom: 0,right: 0}}
//                          />
//                          <Text >asdasdasdasdasdasdasd</Text>