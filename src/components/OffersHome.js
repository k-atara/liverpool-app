import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Card from './sections/card';

export default function OffersHome() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Image 
                            style={styles.cardImage}
                            source={require('./../img/logo1.png')}
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
                            source={require('./../img/logo1.png')}
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
                            source={require('./../img/logo1.png')}
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
                            source={require('./../img/logo1.png')}
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
                            source={require('./../img/logo1.png')}
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
                            source={require('./../img/logo1.png')}
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
        alignItems: 'stretch',
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
    fixToText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        alignSelf: 'stretch',
    },
});