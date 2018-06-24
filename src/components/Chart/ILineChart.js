import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {LineChart, Grid, Path} from "react-native-svg-charts";
import Dimensions from 'Dimensions';


const {width, height} = Dimensions.get('window');
const styles = new StyleSheet.create({
    lineChart: {
        padding: 10,
        width: width,
    },
})
export class ILineChart extends Component {
    render() {
        const Shadow = ({line}) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        )
        return (
            <View style={styles.lineChart}>
                <LineChart
                    style={{height: 200}}
                    data={this.props.history}
                    svg={{stroke: 'rgb(134, 65, 244)', strokeWidth: 2,}}
                    contentInset={{top: 20, bottom: 20}}
                >
                    <Grid/>
                    <Shadow/>
                </LineChart>
            </View>
        )
    }
}