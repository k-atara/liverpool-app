import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {Header}  from './sections/Header';

export default function NuevoUsuario() {
    return (
      <View style={styles.container}>
        <Header message='Press to login'/>
        <Image
            style={styles.tinyLogo}
            source={require('./../img/logo1.png')}
        />
        <Text style={styles.textTitle}>¡No eres cliente de Liverpool, pero estas a un paso de serlo!</Text>
        <Text style={styles.textSubTitle}>Te estas perdiendo miles de ofertas y ahorros, ¡No esperes más!</Text>
        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Registrarse"
                color="#E10098"
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
      margin: 20
    },
    textSubTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    buttonContainer: {
        margin: 20
    },
    tinyLogo: {
        width: 500,
        height: 80,
        resizeMode: 'center',
        margin: 50
    },
  });