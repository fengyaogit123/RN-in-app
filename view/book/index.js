import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import BookItem from './BookItem';
import Header from '../Component/Header';
import * as Inface from '../../globa/base';
const {SERVER_PATH} = Inface;




export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
        
    }
    componentWillMount(){
        this.getBook();
    }
    getBook(){
        fetch(Inface.BOOK_LIST,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.status==="success"){
                this.setState({dataSource:data.books});
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
            <View style={style.contain} >
                <Header onSearch={(text)=>{ alert(text) }} />
                <ScrollView>
                    <View style={style.tagContain}>
                        <Text style={style.tagFont}>畅销书籍</Text>
                    </View>
                    {this.state.dataSource.map((book,index)=>(
                        <BookItem 
                            key={index}
                            title={book.title} 
                            author={book.author.join(" ")}
                            content={book.summary}
                            tags={()=>{
                                let tags=book.tags;
                                let arr=[];
                                tags.map((tag)=>tag.title&&arr.push(tag.title))
                                return arr.join(" ");
                            }}
                            price={book.price}
                            uri={`${SERVER_PATH}/${book.image}`}
                            onSelect={()=>alert(index)}
                        />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:"#fff"
    },
    tagContain:{
        height:44,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,.04)",
        borderColor:"#e0e0e0",
        borderStyle:"solid",
        borderBottomWidth:1
    },
    tagFont:{
        fontSize:12,
        color:"#555",
        paddingLeft:15
    }
});