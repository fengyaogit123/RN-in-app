import React,{Component,PureComponent } from 'react';
import {View,Text,Image,StyleSheet,ScrollView,RefreshControl} from 'react-native';
import * as Inface from "../../globa/base";
import Title from "./Title";
import MovieItem from './MovieItem';
import Soon from './Soon';
import Header from '../Component/Header';


export default class Content extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            dataSource:[],
            isRefreshing:false
        };
        this._onRefresh=this._onRefresh.bind(this);
        this.update=this.update.bind(this);
    }
    componentWillMount(){
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
                requestAnimationFrame(()=>{
                    this.update({
                        dataSource:data.subjects,
                        isRefreshing:false
                    });
                });
            }else{
                console.log("error");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    _onRefresh(){
        this.update({isRefreshing: true});
        this.getMovies();
    }
    update(newstate){
        this.setState(Object.assign({},this.state,newstate));
    }
    render(){
        const { navigate } = this.props.navigation; 
        return(
            <View style={{flex:1}}>
                <Header onSearch={(text)=>{ alert(text) }}/>
                <ScrollView 
                style={{backgroundColor:"#fff"}} 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#4395FF', '#76EE00', '#C0FF3E']}
                        progressBackgroundColor="rgba(255,255,255,.9)"
                    />
                }
                >
                <Soon horizontal={true} />
                <Title label="即将上映" />
                <View style={[style.contain,{flexWrap:"wrap"}]}>
                    {this.state.dataSource.map((movie,index)=>(
                        <MovieItem 
                            title={movie.title} 
                            uri={movie.images.large}
                            boxStyle={{height:200}} 
                            key={index}
                            onSelect={()=>navigate('MovieDet', { movieId: movie.id,title:movie.title,mode:true })}
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
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor:"#fff"
    },
});