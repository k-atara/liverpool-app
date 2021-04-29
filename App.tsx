import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Home from './src/components/Home';
import {Beneficios} from './src/components/Beneficios';
import Cliente from './src/components/Cliente';
import NuevoUsuario from './src/components/NuevoUsuario';
import OffersHome from './src/components/OffersHome';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Offers" component={OffersHome} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    //<Home/>
    //<NavigationContainer>
      //<MyDrawer />
    //</NavigationContainer>
    //<OffersHome/>
    <Beneficios/>
    //<Cliente/>
    //<NuevoUsuario/>
  );
}