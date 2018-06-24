import React, {Component}  from 'react';
import {StyleSheet, View, Button, Text, Image, Dimensions} from 'react-native';

export class MenuItem extends Component {
    render() {
        return (
            <View>
                <Image
                    resizeMode='contain'
                    source={this.props.source}
                    style={styles.image}
                />
                <Text style={styles.title} >{this.props.title}</Text>
                <Text style={styles.description} >{this.props.description} </Text>
                <Text style={styles.price} >{this.props.price} </Text>
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    title: {
        fontFamily: 'AlegreyaSansSC-Light',
        fontSize: 26,
        marginTop: 6,
        marginLeft: 10,
        marginBottom: -4,
    },
    description: {
        fontFamily: 'AlegreyaSansSC-Regular',
        fontSize: 14,
        marginLeft: 10,
    },
    image: {
        height: 220,
        width: 40,
    },
    price: {
        fontFamily: 'AlegreyaSansSC-Medium',
        fontSize: 28,
        marginLeft: 10,
        marginBottom: 10,
    }

})