import React from 'react';
import {Header}  from './sections/Header';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Home() {
    return (
      <View>
        <Header message='Shop'/>
        <View style={styles.container}>
          <TextInput
              style={styles.input}
              placeholder="Buscar"
              keyboardType="default"
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTitle: {
      color: '#E10098',
      fontWeight: 'bold',
      fontSize: 30,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 0.5,
    },
  });