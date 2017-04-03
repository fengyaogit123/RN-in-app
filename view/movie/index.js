import React,{Component} from 'react';
import{View,Text,Image,StyleSheet,ScrollView,RefreshControl} from 'react-native';
import * as Inface from "../../globa/base";
import Title from "./Title";
import MovieItem from './MovieItem';
import Soon from './Soon';
import Header from '../Component/Header';
export default class Content extends Component{
    constructor(props){
        super(props);
        this.state={
        dataSource:[],
        isrefreshing:false
        };
        this.getMovies();
    }
    //获取数据
    getMovies(){
        fetch(Inface.IN_THEATERS,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.status==="success"){
                this.setState(Object.assign({},this.state,{dataSource:data.subjects}));
            }else{
                console.log("error");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header onSearch={(text)=>{ alert(text) }} />
                <ScrollView 
                style={{backgroundColor:"#fff"}} >
                    <Soon horizontal={true} />
                    <Title label="即将上映" />
                    <View style={style.contain}>
                        {this.state.dataSource.map((movie,index)=>(
                            <MovieItem 
                                title={`${movie.title}${index}`} 
                                uri={movie.images.large} key={index}
                            />   
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const style = StyleSheet.create({
    contain:{
        width:"100%",
        justifyContent:"space-around",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-start",
        backgroundColor:"#fff"
    },
});