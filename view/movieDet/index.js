import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import {SUBJECT} from '../../globa/base';
import Brief from './Brief';
import Casts from './Casts';
import Comment from './Comment';
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
        title:({state})=>{
            return state.params.title;
        }, 
        header:{
            style:hStyle.headerStyle,
            titleStyle:hStyle.titleStyle,
            tintColor:"#fff"
        }
    }
    constructor(props){
        super(props);
        this.state={
            dataSource:{}
        };
        
    }
    componentWillMount(){
        this.getSubject();
    }
    getSubject(){
        let {params } = this.props.navigation.state;
        fetch(`${SUBJECT}${params.movieId}`,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.status==="success"){
                this.setState(Object.assign({},this.state,{dataSource:data.data}));
            }else{
                console.log("error");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        let {params } = this.props.navigation.state;
        let movie = this.state.dataSource;
        let uri = movie.images&&movie.images.large;
        let tags = movie.genres||[];
        //
        let casts=[];
        if(movie.casts){
            movie.casts.map((ca)=>{
                casts.push({
                    title:ca.name||"",
                    uri:ca.avatars&&ca.avatars[0]&&ca.avatars[0].small
                });
            });
        }
        return(
            <ScrollView>
                {/*briefContain 头部*/}
                <Brief
                    uri={uri}
                    title={movie.title}
                    original_title={movie.original_title}
                    tags={tags.join('、')}
                 />
                {/*mainContain 内容简介*/}
                <Main movie={movie}/>
                {/*castContain 演员列表*/}
                <Casts uri={uri} casts={casts}/>
                {/*commentContain 评论*/}
                <Comment movie={movie}/>
            </ScrollView>
        )
    }
} 

const Main = (props)=>(
    <View style={style.mainContain} >
        <Text style={style.mainText}>
                {props.movie.summary}
        </Text>
    </View>
)

const style =StyleSheet.create({
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
});
