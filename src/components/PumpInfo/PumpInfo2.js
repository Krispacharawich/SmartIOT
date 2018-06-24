import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {renderTextName, renderTextSpeed, renderTextWeather, renderTextWindSpeed} from '../../actions';
import Dimensions from 'Dimensions';
import {GaugeChart, ILineChart} from '../Chart/index';

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

export class PumpInfo2 extends Component {

    componentDidMount() {
        this.timer = setInterval(() => this.props.loadPumps2(), 2000)
    }

    render() {
        const emptyText = <Text></Text>;
        const emptyData = [0];
        const renderPumpName = this.props.mindsphere2 ?
            renderTextName(this.props.mindsphere2.asset.name) : emptyText;
        const renderPumpValue = this.props.mindsphere2 ?
            renderTextSpeed(this.props.mindsphere2.speed) : emptyText;
        const renderWeatherStatus = this.props.mindsphere2 ?
            renderTextWeather(this.props.mindsphere2.weather.weather) : emptyText;
        const renderWeatherWind = this.props.mindsphere2 ?
            renderTextWindSpeed(this.props.mindsphere2.windDeg) : emptyText;

        const currentSpeed = this.props.mindsphere2 ? this.props.mindsphere2.speed : 0;
        const data = this.props.mindsphere2 ? this.props.mindsphere2.history : emptyData;

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

async function loadPumpsInfo2(dispatch) {
    return fetch("https://backend-pump-generator.herokuapp.com/pump/c16980e045784cfe87a3b3f265bd8190/health", {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log("Load Data Compete")
            dispatch({
                type: 'SUCCESS',
                dt: data, id: 2,
            })
        })
        .catch((err) => {
            console.log("Catch")
            console.log(err);
            dispatch({type: 'ERROR', err})
        })


}

const mapStateToProps = state => {
    let pump = state.p2;
    if (pump.asset) {
        return {
            mindsphere2: {
                data: pump,
                asset: pump.asset,
                speed: pump.data.speed,
                weather: pump.weather.current,
                windDeg: pump.weather.current.wind_deg,
                history: state.p2Arr
            },
            currentPump: 2

        }
    } else {
        return state
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadPumps2: () => loadPumpsInfo2(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(PumpInfo2);