import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button , Image, TouchableHighlight} from 'react-native';

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
      <Drawer.Screen name="Inicio" component={OffersHome} />
      <Drawer.Screen name="Lista de deseos" component={OffersHome} />
      <Drawer.Screen name="Registrar" component={NuevoUsuario} />
      <Drawer.Screen name="Suscribirse" component={Cliente} />
      <Drawer.Screen name="Beneficios" component={Beneficios} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    //<Home/>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    //<OffersHome/>
    //<Beneficios/>
    //<Cliente/>
    //<NuevoUsuario/>
  );
}


const styles = StyleSheet.create({
  root: {
      flex: 1,
      flexDirection: "column",
  },
  menu: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      width: undefined,
      height: 120,
  },
  imageLogo: {
      resizeMode: 'contain',
      width: 100,
      height: 50,
  },
  menuButton: {
      resizeMode: 'contain',
      width: 25,
      height: 25,
  }
});