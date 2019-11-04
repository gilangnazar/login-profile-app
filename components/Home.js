import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, FlatList, Image, ScrollView} from 'react-native'
import {Header, Icon, ThemeProvider, Avatar, ListItem} from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './Login'

const theme = {
    color: '#3184d6'
}
const data = {
    name: 'gilangnazar',
    desc: 'nama aslinya emg panjang bat jdinya gilangnazar aja',
    profilePic: require("../assets/img/profile.jpg"),
    followers: 1000,
    following: 10000,
    posts: 20,
    photos: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpeg"),
        require("../assets/img/4.png"),
        require("../assets/img/5.png"),
        require("../assets/img/6.jpg")
    ]
}


class Home extends Component{
    render(){
        return(
            <ThemeProvider>
                <NavBarComp/>
                <ScrollView>
                    <HeaderComp/>
                    <Button 
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }}
                        title="Login"
                    />
                    <StatusComp/>
                    <GalleryComp/>
                    <PostComp/>
                </ScrollView>
            </ThemeProvider>
            )
    }
}

const NavBarComp = () =>{
    return (
        <Header 
            backgroundColor={theme.color}
            containerStyle={{ borderBottomColor: 'transparent', shadowColor: 'transparent', borderBottomWidth: 0 }}
            placement='left'
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: 'Profile', style:{color: '#fff', fontSize: 20}}}
            rightComponent={ <NavbarKanan /> }
        />
    )
}

const NavbarKanan = () =>{
    return(
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='search' color='#fff' iconStyle={{paddingRight: 10}} />
        <Icon name='more-vert' color='#fff' />
    </View>
    )
}

const HeaderComp = () => {
    return (
        <>
            <View style={{flex: 4, backgroundColor: theme.color, marginTop: 0}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 2}}>
                        <Avatar
                        size={100} avatarStyle={{borderWidth: 3, borderColor: 'white', borderRadius: 100}}
                        title='Avatar'
                        titleStyle={{fontSize: 11}}
                        rounded
                        source={data.profilePic}
                        />
                    </View>
                    <View style={{flex: 1, paddingBottom: 20}}>
                        <Text style={{color: '#fff', textAlign: "center", fontWeight: '400', fontSize: 20, paddingTop: 11}}>
                            {data.name}
                        </Text>
                        <Text style={{color: '#fff', textAlign: 'center', fontWeight: '100', fontSize: 11}}>
                            {data.desc}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const StatusComp = () => {
    return(
        <View style={{flex: 2, paddingTop: 15}}>
            <View style={{flex: 2, borderBottomWidth: 0.5, borderBottomColor: '#ebebeb', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '10%', paddingRight: '10%'}}>
                <View style={{flexDirection: 'column', marginBottom: 15, justifyContent: 'space-between'}}>
                    <View style={{ flex: 1 }} />
                        <Text style={{textAlign: 'center'}}>{data.posts}</Text>
                        <Text style={{textAlign: 'center', opacity: 0.5}}>Posts</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{marginBottom: 15}}>
                    <View style={{ flex: 1 }} />
                        <Text style={{textAlign: 'center'}}>{data.followers}</Text>
                        <Text style={{textAlign: 'center', opacity: 0.5}}>Followers</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{marginBottom: 15}}>
                    <View style={{ flex: 1 }} />
                        <Text style={{textAlign: 'center'}}>{data.following}</Text>
                        <Text style={{textAlign: 'center', opacity: 0.5}}>Following</Text>
                    <View style={{ flex: 1 }} />
                </View>
            </View>
        </View>
    )
}

const GalleryComp = () => {
    return(
        <View style={{flex: 2, flexDirection: 'column', paddingRight: 12, marginBottom: 15, borderBottomWidth: 0.7, borderBottomColor: '#ebebeb', paddingBottom: 10}}>   
            <View style={{flex:1, paddingLeft: 12, paddingBottom: 12, paddingTop: 12}}>
                <Text style={{fontSize: 15}}>Photos</Text>
            </View>
            <View style={{flex:4, flexDirection: 'row', paddingleft: 12, overflow: 'scroll'}}>
                <FlatList 
                horizontal={true}
                data={data.photos}
                renderItem={({item}) =>(
                    <Image source={item} style={{height: 80, width: 80, marginRight: 10, marginLeft: 10}} />
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

const PostComp = () => {
    return(
        <View style={{flex: 5}}>
            <View style={{flex:0.1, justifyContent: 'center', marginTop: 10, marginLeft: 12}}>
                <Text style={{fontSize: 15, marginBottom: 10}}>Post</Text>
            </View>
            <View style={{flex: 0.5}}>
                <ListItem 
                leftAvatar={{title: data.name[0], source: data.profilePic, rounded: false, size: 60}} 
                title={data.name}
                subtitle={ <SubtitleComp/> }
                chevron
                />
            </View>
            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                source={data.photos[3]}
                style={{height: 300, width: 300, marginBottom: 10}}
                />
            </View>
        </View>
    )
}

const SubtitleComp = () => {
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Icon 
                name= "date-range"
                size={20}
                color="#9f9f9f"
                />
            </View>
            <View style={{flex: 17, paddingLeft: 8}}>
                <Text style={{color:'#9f9f9f'}}>a year ago</Text>
            </View>
        </View>
    )
}

const Navigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login
    }
})

export default createAppContainer(Navigator)



