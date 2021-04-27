import React from 'react';
import {  FlatList, StyleSheet, Text, View, Button, Image, TextInput  } from 'react-native';

export default function Beneficios() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('./../img/logo1.png')}
        />
        
        <Text style={styles.textTitle}>Beneficios</Text>
        <Text style={styles.textSubTitle}>De tarjetahabientes</Text>

        <FlatList
        data={[
          {key: '✤ 10% de descuento adicional en tu primer día de compras en tienda.'},
          {key: '✤ 10% de descuento adicional en tu primer día de compras en liverpool.com.mx'},
          {key: '✤ Sin costo por apertura ni anualidad.'},
          {key: '✤ Tarjetas Adicionales sin costo'},
          {key: '✤ Mesa de regalos'},
          {key: '✤ Puntos'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="¡Obtener ahora!"
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
      margin: 10
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
      item: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        height: 50,
      },
  });