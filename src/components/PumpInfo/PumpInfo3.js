import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import Dimensions from 'Dimensions';
import {GaugeChart, ILineChart} from '../Chart/index';
import {renderTextWindSpeed, renderTextSpeed, renderTextWeather, renderTextName} from '../../actions';

const {width, height} = Dimensions.get('window');
const styles = new StyleSheet.create({
    main: {
        backgroundColor: '#090D29',
        height: height,

    },
    mainChart: {
        alignItems: 'center',
        padding: 20,
        flex: 1,
    },
    mainInfo: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    info: {
        padding: 10,
        width: width * (20 / 100),
    },
    textColor: {
        color: 'white',
    }


})

export class PumpInfo3 extends Component {

    componentDidMount() {
        this.timer = setInterval(() => this.props.loadPumps3(), 2000)
    }

    render() {
        const emptyText = <Text></Text>;
        const emptyData = [0];
        const renderPumpName = this.props.mindsphere3 ?
            renderTextName(this.props.mindsphere3.asset.name) : emptyText;
        const renderPumpValue = this.props.mindsphere3 ?
            renderTextSpeed(this.props.mindsphere3.speed) : emptyText;
        const renderWeatherStatus = this.props.mindsphere3 ?
            renderTextWeather(this.props.mindsphere3.weather.weather) : emptyText;
        const renderWeatherWind = this.props.mindsphere3 ?
            renderTextWindSpeed(this.props.mindsphere3.windDeg) : emptyText;

        const currentSpeed = this.props.mindsphere3 ? this.props.mindsphere3.speed : 0;
        const data = this.props.mindsphere3 ? this.props.mindsphere3.history : emptyData;

        return (
            <View style={styles.main}>
                <View style={styles.mainChart}>
                    <GaugeChart currentSpeed={currentSpeed}/>
                    <ILineChart history={data}/>
                </View>
                <View style={styles.mainInfo}>
                    <View style={styles.info}>
                        {renderPumpName}
                    </View>
                    <View style={styles.info}>
                        {renderPumpValue}
                    </View>
                    <View style={styles.info}>
                        {renderWeatherStatus}
                    </View>
                    <View style={styles.info}>
                        {renderWeatherWind}
                    </View>
                </View>

            </View>
        )
    }
};

async function loadPumpsInfo3(dispatch) {
    return fetch("https://backend-pump-generator.herokuapp.com/pump/853a78cbf24140628434e6f312325773/health", {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log("Load Data Compete")
            dispatch({
                type: 'SUCCESS',
                dt: data, id: 3,
            })
        })
        .catch((err) => {
            console.log("Catch")
            console.log(err);
            dispatch({type: 'ERROR', err})
        })


}

const mapStateToProps = state => {
    let pump = state.p3;
    if (pump.asset) {
        return {
            mindsphere3: {
                data: pump,
                asset: pump.asset,
                speed: pump.data.speed,
                weather: pump.weather.current,
                windDeg: pump.weather.current.wind_deg,
                history: state.p3Arr
            },
            currentPump: 3

        }
    } else {
        return state
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadPumps3: () => loadPumpsInfo3(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(PumpInfo3);