import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Inicio() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('./../img/logo1.png')}
        />
        <Text style={styles.textTitle}>Bienvenido</Text>
        <Text style={styles.textSubTitle}>¡Ahorra con las mejores ofertas!</Text>
        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Cliente Liverpool"
                color="#E10098"
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Ofertas visitante"
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