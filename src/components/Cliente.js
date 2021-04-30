import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TextInput } from 'react-native';


export default function Cliente({ navigation }) {
    return (
      <View style={styles.mainContainer}>
          <ScrollView>
        <View style={styles.root}>
                        <View style={styles.menu}>
                            <TouchableHighlight onPress={() => navigation.openDrawer() }>
                                <Image
                                    style={styles.menuButton}
                                    source={require('./../img/menu.png')}
                                ></Image>
                            </TouchableHighlight>
                            <Image 
                                style={styles.imageLogo}
                                source={require('./../img/logo1.png')}            
                            ></Image>
                        </View>
                    </View>
        <Image
            style={styles.tinyLogo}
            source={require('./../img/logo1.png')}
        />
        
        <Text style={styles.textSubTitle}>¡Ahorra con las mejores ofertas!</Text>
        
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
        />

        <TextInput
            style={styles.input}
            placeholder="Numero telefónico"
            keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('¡Listo ahora resiviras todas nuestras ofertas!');
                }}
                title="Siguiente"
                color="#E10098"
            />
        </View>
        </View>
        </ScrollView>
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
      fontSize: 30,
      margin: 20,
      textAlign:  'center',
    },
    textSubTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        textAlign:  'center',
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
        marginRight: 200,
    }
  });