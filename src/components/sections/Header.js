import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
                <View style={styles.bottomStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText:{
        textAlign: 'right',
        color: '#E10098',
        fontSize: 20,
        marginRight: 5,
        marginLeft: 5,
    },
    headStyle: {
        paddingTop: 15,
        backgroundColor: '#ffffff',
        flex: 1
    },
    bottomStyle: {
        marginTop: 10,
        marginBottom: 10,
        height: 2, 
        backgroundColor: '#E10098'
    },
  });