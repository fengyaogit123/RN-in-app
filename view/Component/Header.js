import React,{Component,PropTypes} from 'react';
import {View,Text,Image,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Colors from '../../globa/colors';
export default class Header extends Component {
    static propTypes = {
        onSearch: PropTypes.func
    };
    constructor(props){
        super(props);
        this.state={
            text:""
        };
        this.onSearch =  this.onSearch.bind(this);
    }
    onSearch(){
        this.props.onSearch(this.state.text);
        this.setState({text:""})
    }
    render(){
        return(
            <View style={style.contain}>
                <View style={style.logoBox}>
                    <Text style={style.logoFont}>in</Text>
                </View>
                <View style={style.inputWrap}>
                    <Icon name="ios-search" size={14} color="#eee" style={style.inputIcon} />
                    <TextInput 
                        placeholder="Search"
                        placeholderTextColor="#aaa"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        style={style.input}
                    />
                </View>
                <TouchableOpacity onPress={this.onSearch}>
                    <Text style={style.rightFont}>
                        搜索
                    </Text>
                </TouchableOpacity >
            </View>
        )
    }

}
const style = StyleSheet.create({
    contain:{
        flexDirection:"row",
        height:44,
        backgroundColor:"#222"
    },
    logoBox:{
        width:30,
        height:30,
        backgroundColor:Colors.COLOR,
        marginTop:6,
        marginLeft:10,
        borderRadius:2,
        marginRight:15
    },
    logoFont:{
        color:"#fff",
        fontSize:28,
        textAlign:"center",
        lineHeight:30
    },
    inputWrap:{
        height:38,
        flexDirection:"row",
        flex:1,
        borderBottomColor:Colors.COLOR,
        borderBottomWidth:2,
        borderStyle:"solid"
    },
    inputIcon:{
        lineHeight:25,
        marginRight:6
    },
    input:{
        color:"#fff",
        flex:1,
        fontSize:13,
        borderRadius:5
    },
    rightFont:{
        height:44,
        lineHeight:30,
        color:"#fff",
        fontSize:13,
        width:40,
        marginLeft:15,
        fontFamily:"serif"
    }
})