import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity, Linking, } from 'react-native';
import Card from './sections/card';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default function OffersHome( { navigation }) {
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
                    <View style={styles.cardContainer}>
                        <Card style={styles.card}>
                            <Image 
                                style={styles.cardImage}
                                source={require('./../img/oferta1.jpg')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/l%C3%ADnea-blanca/cat610025')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <Image 
                                style={styles.cardImage}
                                source={require('./../img/oferta2.png')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/otras-categorias/catst16656479')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                    </View>
                    <View style={styles.cardContainer}>
                        <Card style={styles.card}>
                            <Image 
                                style={styles.cardImage}
                                source={require('./../img/oferta6.jpg')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/ni%C3%B1os-y-ni%C3%B1as/catst18406782')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <Image 
                                style={styles.cardImage}
                                source={require('./../img/oferta5.jpg')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda?s=venta+nocturna')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                    </View>
                    <View style={styles.cardContainer}>
                        <Card style={styles.card}>
                            <Image
                                style={styles.cardImage}
                                source={require('./../img/oferta3.jpg')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/c%C3%B3mputo-y-electr%C3%B3nica/cat5150041')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <Image 
                                style={styles.cardImage}
                                source={require('./../img/oferta4.jpg')}
                            >
                            </Image>
                            <View style={styles.fixToText}>
                                <Button
                                    title="+"
                                    onPress={() => {Linking.openURL('https://www.liverpool.com.mx/tienda/mujer/catst4003072')}}
                                />
                                <Button
                                    title="*"
                                    onPress={() => {
                                        alert('¡Listo añadido a favoritos!');
                                    }}
                                />
                            </View>
                        </Card>
                    </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlignVertical: 'top',
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
        resizeMode: 'stretch',
        margin: 20,
    },
    card: {
        alignSelf:'baseline'
    },
    fixToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 4,
        alignSelf: 'stretch',
    },
    button: {
        width: "90%"
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