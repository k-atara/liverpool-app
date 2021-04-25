import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {Header}  from './sections/Header';

export default function NuevoUsuario() {
    return (
      <View>
        <Header message='Press to login'/>
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('./../img/logo1.png')}
            />
            <Text style={styles.textTitle}>¡No eres cliente de Liverpool,</Text> 
            <Text style={styles.textTitle}>pero estas a un paso de serlo!</Text>
            <Text style={styles.textSubTitle}>Te estas perdiendo miles de ofertas</Text>
            <Text style={styles.textSubTitle}>y ahorros, ¡No esperes más!</Text>
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
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTitle: {
      color: '#E10098',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
    },
    textSubTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5
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