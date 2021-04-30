import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity, Linking } from 'react-native';


export default function NuevoUsuario({ navigation }) {
    return (
      <View style={styles.container}>
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
          <View>
          <Image
              style={styles.img}
              source={require('./../img/bc01_190421mue.jpg')}
          />
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
                  onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/login')}}
                  title="Registrarse"
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
      textAlignVertical: 'top',
    },
    textTitle: {
      color: '#E10098',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
      textAlign:  'center',
    },
    textSubTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
        textAlign:  'center',
    },
    buttonContainer: {
        margin: 20,
    },
    img: {
      width: '100%', 
      height: '40%',
    },
    tinyLogo: {
      width: 500,
      height: 80,
      resizeMode: 'center',
      margin: 20,
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