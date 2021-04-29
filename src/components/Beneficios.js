import React from 'react';
import {  FlatList, StyleSheet, Text, View, Button, Image, Modal } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export class Beneficios extends React.Component {

    constructor(){
        super();
        this.state = {visible: false};
    }

    render(){
        return(
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
                    onPress={() => {this.setState({show:true})}}
                    title="¡Obtener ahora!"
                    color="#E10098"
                />
            </View>

            <Button
                onPress={() => {
                    this.setState({ visible: true });
                }}
                title="Show Dialog"
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
                            title="Ahora si"
                            color="#E10098"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {
                                this.setState({visible:false})
                            }}
                            title="Ahora no"
                            color="#E10098"
                        />
                    </View>
            </DialogContent>
            
            </Dialog>

            <View>
                                
        </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
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
      },
  });