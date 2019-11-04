import React, {Component} from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import kereta from './kereta.png'

class Biodata extends Component{
    state={
        data: [
            {'id': 1, 'nama': 'Gilang Nazar', 'kelas': '12 RPL 1'},
            {'id': 1, 'nama': 'Gilang Nazar', 'kelas': '12 RPL 1'},
            {'id': 1, 'nama': 'Gilang Nazar', 'kelas': '12 RPL 1'},
        ]
    }
    render(){
        return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>ini header</Text>
            </View>

            <View style = {{flex: 1}}>
                <ScrollView>
                    <Card />
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <Text>ini Footer</Text>
            </View>

        </View>
        )
    }
}

export default Biodata

function Card(){
    return(
    <View style={styles.card}>

        <View style={{ width: 75, backgroundColor: 'orange' }}>
            {/* img */}
            <Image source={kereta} style={{width: 75, height: 75}} />
        </View>

        <View style={styles.cardBody}>
            <Text style={{ fontSize: 19, marginBottom: 4 }}>Gilang Nazar</Text>
            <Text>XII RPL 1</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    header: {
        backgroundColor: 'blue',
        padding: 10,
        color: 'white',
        width: '100%',
        height: 58
    },
    headerText: {
        color: 'white',
        fontSize: 24
    },
    footer: {
        padding: 10,
        backgroundColor: 'red'
    }, 
    card: {
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 3
    },
    cardBody:{
        paddingLeft: 8,
        paddingBottom: 8,
        paddingTop: 5,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
})