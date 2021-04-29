import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//ScreenStacks
import HomeScreenStack from './HomeStack';

const NavigationStacks = createDrawerNavigator({
    Home: {
        screen: HomeScreenStack,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: "Inicio",
            drawerIcon: () => <MaterialCommunityIcons name="home" size={24} style={{color: tintColor}}/>
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

export default NavigationContainer(NavigationStacks);