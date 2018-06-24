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

export class PumpInfo4 extends Component {

    componentDidMount() {
        this.timer = setInterval(() => this.props.loadPumps4(), 2000)
    }

    render() {
        const emptyText = <Text></Text>;
        const emptyData = [0];
        const renderPumpName = this.props.mindsphere4 ?
            renderTextName(this.props.mindsphere4.asset.name) : emptyText;
        const renderPumpValue = this.props.mindsphere4 ?
            renderTextSpeed(this.props.mindsphere4.speed) : emptyText;
        const renderWeatherStatus = this.props.mindsphere4 ?
            renderTextWeather(this.props.mindsphere4.weather.weather) : emptyText;
        const renderWeatherWind = this.props.mindsphere4 ?
            renderTextWindSpeed(this.props.mindsphere4.windDeg) : emptyText;

        const currentSpeed = this.props.mindsphere4 ? this.props.mindsphere4.speed : 0;
        const data = this.props.mindsphere4 ? this.props.mindsphere4.history : emptyData;

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

async function loadPumpsInfo4(dispatch) {
    return fetch("https://backend-pump-generator.herokuapp.com/pump/c88a4ae76cdd4cd4b9efc42a5665fe82/health", {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log("Load Data Compete")
            dispatch({
                type: 'SUCCESS',
                dt: data, id: 4,
            })
        })
        .catch((err) => {
            console.log("Catch")
            console.log(err);
            dispatch({type: 'ERROR', err})
        })


}

const mapStateToProps = state => {
    let pump = state.p4;
    if (pump.asset) {
        return {
            mindsphere4: {
                data: pump,
                asset: pump.asset,
                speed: pump.data.speed,
                weather: pump.weather.current,
                windDeg: pump.weather.current.wind_deg,
                history: state.p4Arr
            },
            currentPump: 4

        }
    } else {
        return state
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadPumps4: () => loadPumpsInfo4(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(PumpInfo4);