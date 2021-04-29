import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'

//ScreenStacks
import HomeStack from './HomeStack';

const NavigationStacks = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: "Inicio",
            drawerIcon: () => <Icon name= "home" size={24} style={{color: tintColor}}/>
        })
    }
},
{
    drawerBackgroundColor: '#717171',
    contentOptions: {
        activeTintColor: "white",
        inacticeTintColor: "white",
        itemsContainerStyles: {
            marginVertical: 0
        }
    }
}
);

export default createAppContainer(NavigationStacks);