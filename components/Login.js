import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Header, ThemeProvider, Text, Input, Icon, Button } from "react-native-elements";

export default class Login extends Component{
    render(){
        return(
            <>
            <HeaderComp />
            <InputComp/>
            </>
        )
    }
}

const HeaderComp = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Header
            containerStyle={{ backgroundColor: 'red', alignItems: 'flex-start', height: '100%', width: '60%'}}
            centerComponent={<Greeting />}
            />
        </View>
    )
}

const Greeting = () => {
    return(
    <View>
        <Icon 
        name='warning'
        color='#41fa88'
        size={150}
        />
        <Text h1 style={{textAlign: 'center', color: '#41fa88'}}>Welcome</Text>
        <Text h3 style={{textAlign: 'center', color: '#7d7d7d'}}>Log In to continue</Text>
    </View>
    )
}

const InputComp = () => {
    return(
        <View style={{flex: 1, marginTop: 50, justifyContent: 'center', alignItems: 'center'}} >
            <Input
            label='Username'
            containerStyle={{marginBottom: 20}}
            />
            <Input
            label='password'
            containerStyle={{marginBottom: 20}}
            />
            <TouchableHighlight
            style={{backgroundColor:'#68a0cf', borderRadius:10, borderWidth: 1, borderColor: '#fff', width: '60%', height: 50, alignItems: "center", justifyContent: "center"}}
            >
                <Text style={{color: 'black', justifyContent: 'center', textAlign: 'center'}}>Login</Text>
            </TouchableHighlight>
        </View>
    )
}

// const style = StyleSheet.create({
//     textHeader: {
//         textAlign: 'center',
//         marginTop: 10,
//         fontSize: 20
//     }
// })
