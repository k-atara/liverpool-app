import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header}  from './sections/Header';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Liverpool es parte de mi vida</Text>
        <Text>This is a new app</Text>
        <Header message='Press to login'/>
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
      color: 'pink',
      fontWeight: 'bold',
      fontSize: 30,
    },
  });