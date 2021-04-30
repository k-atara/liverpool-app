import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity, Linking, FlatList } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export class Beneficios extends React.Component {
    static navigation;
    constructor({ navigation }){
        super();
        this.state = {visible: false};
        this.navigation = { navigation };
    }

    render(){
        const uri = 'https://micredito.liverpool.com.mx/app/card-request-init#';
        return(
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
                    <View style={styles.container}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('./../img/logo1.png')}
                        />
                        <Text style={styles.textSubTitle}>Beneficios de tarjetahabientes</Text>

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
                                onPress={() => {Linking.openURL(uri)}}
                                title="¡Obtener ahora!"
                                color="#E10098"
                            />
                        </View>

                        <Button
                            onPress={() => {
                                this.setState({ visible: true });
                            }}
                            title="Solo suscribirme"
                            color="#E10098"
                        />
                        <Dialog
                            visible={this.state.visible}
                            onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}
                        >
                            <DialogContent>
                                    <View  style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={styles.textTitle}>¡Mantente al tanto!</Text>
                                        <Text style={styles.textSubTitle}>No te pierdas ninguna de las próximas ofertas y ahorra en miles de productos</Text>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={() => {
                                                this.setState({visible:false})
                                            }}
                                            title="Continuar"
                                            color="#E10098"
                                        />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            onPress={() => {
                                                this.setState({visible:false})
                                            }}
                                            title="No gracias"
                                            color="#E10098"
                                        />
                                    </View>
                            </DialogContent>
            
                        </Dialog>

                    <View>
                                
        </View>
        </View>
        </ScrollView>
        </View>

        );
    }
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
      marginTop: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTitle: {
      color: '#E10098',
      fontWeight: 'bold',
      fontSize: 30,
      margin: 10,
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
        margin: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
      },
      item: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 18,
        height: 50,
        textAlign:  'center',
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