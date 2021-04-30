import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Card from './sections/card';

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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                    title="+"
                                    onPress={() => Alert.alert('+')}
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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                    title="+"
                                    onPress={() => Alert.alert('+')}
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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                title="+"
                                    onPress={() => Alert.alert('+')}
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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                title="+"
                                    onPress={() => Alert.alert('+')}
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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                title="+"
                                    onPress={() => Alert.alert('+')}
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
                                    title="-"
                                    onPress={() => Alert.alert('-')}
                                />
                                <Button
                                title="+"
                                    onPress={() => Alert.alert('+')}
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
    }
});