import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, KeyboardAvoidingView, ProgressBarAndroid } from "react-native";
import { Header, ThemeProvider, Text, Input, Icon, Button} from "react-native-elements";
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Axios from "axios";


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            error:"",
            loading: false
        }
    }
    login(){
        this.setState({
            loading: true
        })
        const {username, password} = this.state;
        Axios.post("http://192.168.42.212:7200/login", {username, password})
        .then(res => {
            if(res.status==200){    
                this.props.navigation.navigate("Profile", {
                    userdata: res.data
                })
            }
        })
        .catch(err => {
            if(err.response && err.response.status == 503){
                this.setState({
                    error: "user tidak ditemukan"
                })
            }else {
                this.setState({
                    error: "server error " + err
                })
            }
        }).finally(e => {
            this.setState({
                loading: false
            })
        })
    }
    render(){
        return(
            <>
            <HeaderComp />
            {/* <InputComp/> */}
            <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                <Input
                label='Username'
                containerStyle={{marginBottom: 20, width: '85%', justifyContent: 'center'}}
                value={this.state.username}
                onChange={e => {
                    this.setState({
                        username : e.nativeEvent.text
                    })
                }}
                />
                <Input
                label='password'
                containerStyle={{marginBottom: 20, width: '85%', justifyContent: 'center'}}
                value={this.state.password}
                onChange={e => {
                    this.setState({
                        password : e.nativeEvent.text
                    })
                }}
                />
                {
                    this.state.error != "" && (
                <Text style={{color: 'red', marginBottom: 25}}>
                    {this.state.error}
                    </Text>
                )}
                {this.state.loading ? (<ProgressBarAndroid />) : (
                <TouchableHighlight
                style={{backgroundColor:'#68a0cf', borderRadius:10, borderWidth: 1, borderColor: '#fff', width: '80%', height: 50, alignItems: "center", justifyContent: "center"}}
                onPress={() => {
                    this.login()
                }}
                >
                    <Text style={{color: 'black', justifyContent: 'center', textAlign: 'center'}}>Login</Text>
                </TouchableHighlight>
                )}
            </KeyboardAvoidingView>
            </>
        )
    }
}

const HeaderComp = () => {
    return(
        <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Header
            containerStyle={{backgroundColor: 'white', alignItems: 'flex-start', height: '100%'}}
            centerComponent={<Greeting />}
            />
        </KeyboardAvoidingView>
    )
}

const Greeting = () => {
    return(
    <KeyboardAvoidingView behavior="padding" enabled>
        <Icon 
        name='warning'
        color='#41fa88'
        size={100}
        />
        <Text style={{textAlign: 'center', color: '#41fa88'}}>Welcome</Text>
        <Text style={{textAlign: 'center', color: '#7d7d7d'}}>Log In to continue</Text>
    </KeyboardAvoidingView>
    )
}

// const InputComp = () => {
//         return(
            
//         )
// }
