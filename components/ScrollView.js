import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'

class ScroolView extends Component{
    state = {
        names : [
            {'id' : 1, 'name' : 'Gilang'},
            {'id' : 2, 'name' : 'Gab'},
            {'id' : 3, 'name' : 'Ger'},
            {'id' : 4, 'name' : 'Koo'},
            {'id' : 5, 'name' : 'ang'},
            {'id' : 6, 'name' : 'Hadist'},
            {'id' : 7, 'name' : 'Maulana'},
            {'id' : 8, 'name' : 'athar'},
            {'id' : 9, 'name' : 'joh'},
            {'id' : 10, 'name' : 'snow'},
            {'id' : 11, 'name' : 'steve'},
            {'id' : 12, 'name' : 'McQueen'},
            {'id' : 13, 'name' : 'ken'}
        ]
    }

    render(){
        return(
            <View style={{paddingTop: 26}}>
                <ScrollView>
                    {
                        this.state.names.map((item, index) =>(
                            <View key = {item.id} style = {styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                            ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ScroolView

const styles = StyleSheet.create({
    item : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})