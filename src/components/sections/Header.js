import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
    }

    toggleUser = () => {
        this.setState(previusState =>{
            return {isLoggedIn: !previusState.isLoggedIn};
        });
    }

    render(){
        let display = this.state.isLoggedIn ? '*' : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
                <Image style={styles.logoStyle} source={require('./../../img/logo1.png')}/>
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText:{
        textAlign: 'right',
        color: '#E10098',
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    headStyle: {
        paddingTop: 25,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2, 
        borderColor: '#E10098',
    },
    logoStyle:{
        flex: 1,
        with: undefined,
        height: undefined,
        resizeMode: 'center',
    },
  });