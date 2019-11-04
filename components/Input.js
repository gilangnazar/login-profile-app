import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class Inputs extends Component{
    state = {
        email : '',
        password : ''
    }

    handleEmail = (inputan) =>{
        this.setState({ email : inputan })
    }
    handlePassword = (inputan) =>{
        this.setState({ password : inputan })
    }

    login = (email, password) =>{
        alert('email : '+ email +' password : '+password)
    }

    render(){
        return(
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Email'
                    placeholderTextColor = '#9a73ef'
                    autoCapitalize = 'none'
                    onChangeText = {this.handleEmail}
                />
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Password'
                    placeholderTextColor = '#9a73ef'
                    autoCapitalize = 'none'
                    onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    }
                >
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container : {
        paddingTop: 50
    },
    input : {
        margin: 15,
        height: 40,
        borderColor: '#f88379',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: 'white'
    }
})

