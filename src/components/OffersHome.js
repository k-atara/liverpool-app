import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './sections/card';
import { Header } from './sections/Header';

export default function OffersHome() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Image 
                        style={styles.cardImage}
                        source={require('./../img/logo1.png')}
                    >
                    </Image>
                </Card>
                <Card style={styles.card}>
                    <Image 
                        style={styles.cardImage}
                        source={require('./../img/logo1.png')}
                    >
                    </Image>
                </Card>
            </View>
        </View>
    );
}

export const object = {
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlignVertical: 'top',
        //justifyContent: 'center',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlignVertical: 'top',
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 250,
        height: 40,
        resizeMode: 'center',
        margin: 20
    },
    cardImage: {
        width: 125,
        height: 300,
        resizeMode: 'center',
        margin: 20,
    },
    card: {
        alignSelf:'baseline'
    },
});