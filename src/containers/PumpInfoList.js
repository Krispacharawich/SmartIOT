import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

import PumpInfo from '../components/PumpInfo/PumpInfo';
import PumpInfo2 from '../components/PumpInfo/PumpInfo2';
import PumpInfo3 from '../components/PumpInfo/PumpInfo3';
import PumpInfo4 from '../components/PumpInfo/PumpInfo4';
let pumpId = "7dc83ace44004f44843c5d43224b3ff9";

class PumpInfoList extends Component {


    render() {
        // const pump01 = "http://smartfactory.in.th/api/iworks/smartfactory/elk/status/7dc83ace44004f44843c5d43224b3ff9/health";
        // const pump02 = "http://smartfactory.in.th/api/iworks/smartfactory/elk/status/c16980e045784cfe87a3b3f265bd8190/health";
        // const pump03 = "http://smartfactory.in.th/api/iworks/smartfactory/elk/status/853a78cbf24140628434e6f312325773/health";
        // const pump04 = "http://smartfactory.in.th/api/iworks/smartfactory/elk/status/c88a4ae76cdd4cd4b9efc42a5665fe82/health";
        const pump01 ="http://192.168.1.35:8080/pump/7dc83ace44004f44843c5d43224b3ff9/health";
        const pump02 ="http://192.168.1.35:8080/pump/c16980e045784cfe87a3b3f265bd8190/health";
        const pump03 ="http://192.168.1.35:8080/pump/853a78cbf24140628434e6f312325773/health";
        const pump04 ="http://192.168.1.35:8080/pump/c88a4ae76cdd4cd4b9efc42a5665fe82/health";
        const listPump = [{id: 1, data: pump01, name: 'Pump001'},
            {id: 2, data: pump02, name: 'Pump002'},
            {id: 3, data: pump03, name: 'Pump003'},
            {id: 4, data: pump04, name: 'Pump004'}];
        return (
            <View >

                <View key={listPump[0].id} >
                    <Text> Pump 001 </Text>
                    <PumpInfo />
                </View>

                <View key={listPump[1].id}>
                    <Text> Pump 002 </Text>
                    <PumpInfo2 />
                </View>
                <View key={listPump[2].id}>
                    <Text> Pump 003 </Text>
                    <PumpInfo3 />
                </View>
                <View key={listPump[3].id}>
                    <Text> Pump 004</Text>
                    <PumpInfo4/>
                </View>

            </View>
        )
    }
}

async function  loadPumpsInfo(dispatch, pump) {
    console.log("MyPump")
    console.log(pump)
    return  fetch(pump.data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log("Load Data Compete")
            dispatch({
                type: 'SUCCESS',
                dt: data, id: pump.id,
            })
        })
        .catch((err) => {
            console.log("Catch")
            console.log(err);
            dispatch({type: 'ERROR', err})
        })


}

const mapStateToProps = state => {
    console.log("MapStateToProps")
    console.log(state)
    if (state.currentPump > 0) {
        switch (state.currentPump) {
            case 1:
                let pump = state.p1;
                return {
                    mindsphere1: {
                        data: pump,
                        asset: pump.asset,
                        speed: pump.data.speed,
                        weather: pump.weather.current,
                        windDeg: pump.weather.current.wind_deg
                    },
                        currentPump:1

                }
            case 2:
                let pump2 = state.p2;
                return {
                    mindsphere2: {

                            data: pump2,
                            asset: pump2.asset,
                            speed: pump2.data.speed,
                            weather: pump2.weather.current,
                            windDeg: pump2.weather.current.wind_deg
                        },
                        currentPump:2


                }
            case 3:
                let pump3 = state.p3;
                return {
                    mindsphere3: {

                            data: pump3,
                            asset: pump3.asset,
                            speed: pump3.data.speed,
                            weather: pump3.weather.current,
                            windDeg: pump3.weather.current.wind_deg
                        },
                        currentPump:3


                }
            case 4:
                let pump4 = state.p4;
                return {
                    mindsphere4: {

                            data: pump4,
                            asset:
                            pump4.asset,
                            speed:
                            pump4.data.speed,
                            weather:
                            pump4.weather.current,
                            windDeg:
                            pump4.weather.current.wind_deg
                        },
                        currentPump:4


                }
            // return { mindsphere: {
            //         data: state.mindsphere,
            //         asset: state.mindsphere.asset,
            //         speed: state.mindsphere.data.speed,
            //         weather: state.mindsphere.weather.current,
            //         windDeg: state.mindsphere.weather.current.wind_deg
            //     }
            // }
        }
    }
    return state
}

const mapDispatchToProp = (dispatch) => {
    return {
        loadPumps: (pump) =>  loadPumpsInfo(dispatch, pump)
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(PumpInfoList);