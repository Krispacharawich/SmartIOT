import React from 'react';
import {Text} from 'react-native';

export const filterPump = pumpId => ({
    type: 'FILTER_PUMP',
    id: pumpId
})


export const showRestInfo = {ps: 'SHOW_WEATHER',
    SHOW_WIND: 'SHOW_WIND'
}

export const renderColor = value => {
    if (value <= 3000) {
        return "#2eb82e";
    } else if (value > 3000 && value <= 4000) {
        return "#D39510"
    } else if (value > 4000 && value <= 5000) {
        return "#ff0000";
    } else if (value > 5000) {
        return "#4E0602";
    }
};

export const renderTextName = value => {
    return <Text style={{color: 'white'}}>Name : {value} </Text>
}

export const renderTextSpeed = value => {
    return <Text style={{color: 'white'}}>Speed : {value} rpm </Text>
}

export const renderTextWeather = value => {
    return <Text style={{color: 'white'}}>Weather Status : {value} </Text>
}

export const renderTextWindSpeed = value => {
    return <Text style={{color: 'white'}}>Wind Degree : {value} °C </Text>
}
