import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Speedometer from 'react-native-speedometer-chart';
import {renderColor} from "../../actions";

const styles = new StyleSheet.create({
    speedometer: {
        padding: 10,
    },
})
export class GaugeChart extends Component {

    render() {
        const innerColor = renderColor(this.props.currentSpeed);
        return (
            <View style={styles.speedometer}>
                <Speedometer
                    value={this.props.currentSpeed}
                    totalValue={6000}
                    size={250}
                    outerColor="#d3d3d3"
                    internalColor={innerColor}
                    showText
                    text={this.props.currentSpeed + " rpm"}
                    textStyle={{color: '#090D29'}}
                    showLabels
                    labelStyle={{color: 'white'}}
                    showPercent
                    percentStyle={{color: innerColor}}
                />
            </View>
        );
    }
}