import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MovieItem from "./MovieItem";
import * as Inface from "../../globa/base";
//子项

export default class Soon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        this.getSoon();
    }

    getSoon(){
        fetch(Inface.COMING_SOON,{
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
    render() {
        return (
            <View style={style.box}>
                <ScrollView horizontal={true}  style={style.contain} >  
                    {this.state.dataSource.map((movie,index)=>(    
                            <MovieItem {...this.props}
                                title={`${movie.title}`} 
                                uri={movie.images.large} 
                                key={index}
                                onSelect={()=>alert(index)}
                            />   
                        ))}
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    box:{
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderColor:"#f0f0f0",
        borderStyle:"solid"
    },
    contain: {
        backgroundColor:"#fff"
    }
});