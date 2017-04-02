import React,{Component} from 'react';
import{View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import * as Inface from "../../globa/base";

const MovieItem = (props)=>(
    <View style={style.itemBox} >
        <Image style={style.itemImg} source={{uri:props.uri}} />
        <Text numberOfLines={1} style={style.itemFont} >{props.title}</Text>
    </View>
)

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state={
        dataSource:[]
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
                this.setState({dataSource:data.subjects});
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
            <ScrollView>
                <View style={style.contain}>
                    {this.state.dataSource.map((movie,index)=>(
                        <MovieItem 
                            title={`${movie.title}${index}`} 
                            uri={movie.images.large} key={index}
                        />   
                    ))}
                </View>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({
    contain:{
        width:"100%",
        justifyContent:"space-around",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-start"
    },
    itemBox:{
        width:"33.3333%",
        paddingTop:10,
        height:180,
        marginBottom:20
    },
    itemImg:{
        height:140,
        marginBottom:10,
        resizeMode:Image.resizeMode.contain
    },
    itemFont:{
        textAlign:"center",
        fontSize:12,
        color:"#666",
        flex:1
    }
});