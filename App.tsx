import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import Beneficios from './src/components/Beneficios';
import Cliente from './src/components/Cliente';
import NuevoUsuario from './src/components/NuevoUsuario';


export default function App() {
  return (
    <Home/>
    //<Beneficios/>
    //<Cliente/>
    //<NuevoUsuario/>
  );
}