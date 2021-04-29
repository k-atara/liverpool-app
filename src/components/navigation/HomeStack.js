import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../Home';

const letIcon = (navigation, icon) =>{
    <Icon
        name = {icon}
        style={{ marginLeft: 20 }}
        size={20}
        color="#000"
        onPress={() => navigation.openDrawer()}
    />
}

const HomeStack = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation}) =>({
            title: "Inicio",
            headerLeft: () => leftIcon(navigation, "bars")
        })
    }
}) 

export default HomeStack;