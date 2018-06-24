import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import SplashScreen  from 'react-native-splash-screen'

export class Home extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={()=> this.props.navigation.navigate('PumpInfoScreen')} title="PumpInfo" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    blinks: {
        color:'red',
    },
});

export default Home;