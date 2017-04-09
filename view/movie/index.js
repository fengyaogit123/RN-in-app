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
        const { navigate } = this.props.navigation; 
        return(
            <View style={{flex:1}}>
                <Header onSearch={(text)=>{ alert(text) }} />
                <ScrollView 
                style={{backgroundColor:"#fff"}} >
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