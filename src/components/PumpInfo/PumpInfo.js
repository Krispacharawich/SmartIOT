import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import Dimensions from 'Dimensions';
import {GaugeChart, ILineChart} from '../Chart/index';
import {renderTextWindSpeed, renderTextSpeed, renderTextWeather, renderTextName} from '../../actions';

import SplashScreen  from 'react-native-splash-screen'
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
        flexDirection: 'column',
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

export class PumpInfo extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        SplashScreen.hide();
        this.timer = setInterval(() => this.props.loadPumps(), 2000)
    }

    render() {
        const emptyText = <Text></Text>;
        const emptyData = [0];
        const renderPumpName = this.props.mindsphere1 ?
            renderTextName(this.props.mindsphere1.asset.name) : emptyText;
        const renderPumpValue = this.props.mindsphere1 ?
            renderTextSpeed(this.props.mindsphere1.speed) : emptyText;
        const renderWeatherStatus = this.props.mindsphere1 ?
            renderTextWeather(this.props.mindsphere1.weather.weather) : emptyText;
        const renderWeatherWind = this.props.mindsphere1 ?
            renderTextWindSpeed(this.props.mindsphere1.windDeg) : emptyText;
        const currentSpeed = this.props.mindsphere1 ? this.props.mindsphere1.speed : 0;
        const data = this.props.mindsphere1 ? this.props.mindsphere1.history : emptyData;

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

async function loadPumpsInfo(dispatch) {
    return fetch("https://backend-pump-generator.herokuapp.com/pump/7dc83ace44004f44843c5d43224b3ff9/health", {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            dispatch({
                type: 'SUCCESS',
                dt: data, id: 1,
            })
        })
        .catch((err) => {
            dispatch({type: 'ERROR', err})
        })


}

const mapStateToProps = state => {
    let pump = state.p1;
    if (pump.asset) {
        return {
            mindsphere1: {
                data: pump,
                asset: pump.asset,
                speed: pump.data.speed,
                weather: pump.weather.current,
                windDeg: pump.weather.current.wind_deg,
                history: state.p1Arr
            },
            currentPump: 1

        }
    } else {
        return state
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadPumps: () => loadPumpsInfo(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(PumpInfo);