import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import {Beneficios} from './src/components/Beneficios';
import Cliente from './src/components/Cliente';
import NuevoUsuario from './src/components/NuevoUsuario';
import OffersHome from './src/components/OffersHome';
import {createSwitchNavigator} from 'react-navigation';
import Navigation from './src/components/navigation/Navigation';

export default function App() {
  return (
    //<Home/>
    //<Navigation/>
    <OffersHome/>
    //<Beneficios/>
    //<Cliente/>
    //<NuevoUsuario/>
  );
}