import React from 'react';
import { PieChart } from 'react-native-svg-charts';

export class IPieChart extends React.PureComponent {
    render() {
        const data =[50,10,40,95,-4,-24,85,91];
        const randomColor = () => ('#'+ (Math.random() * 0xFFFFF << 0).toString(16) + '000000').slice(0, 7)
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: ()=> console.log('press',index),
                },
                key: `pie-${index}`,
            }))
        return (
            <PieChart data={pieData} style={{height: 200}}/>
        )
    }
}