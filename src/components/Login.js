import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput  } from 'react-native';

export default function Login() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('./../img/logo1.png')}
        />
        <Text style={styles.textSubTitle}>Encontramos tu cuenta</Text>
        <Text style={styles.textTitle}>¡Inicia sesión!</Text>
        
        <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="default"
        />

        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Iniciar sesión"
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
      },
  });