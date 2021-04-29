import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Home';

const leftIcon = (navigation, icon) =>{
    <MaterialCommunityIcons
        name = {icon}
        style={{ marginLeft: 20 }}
        size={20}
        color="#000"
        onPress={() => navigation.openDrawer()}
    />
}

const HomeScreenStack = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) =>({
            title: "Inicio",
            headerLeft: () => leftIcon(navigation, "bars")
        })
    }
}) 

export default HomeScreenStack;