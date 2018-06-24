import {StackNavigator} from 'react-navigation';

import Home from '../components/Home/Home';
import Setting from '../components/Setting/Setting';
import {IPieChart} from '../components/Chart/IPieChart';
import PumpInfoList from '../containers/PumpInfoList';
import { ListMenuItem} from '../components/ListMenuItem/ListMenuItem'
import {createBottomTabNavigator , TabBarBottom} from 'react-navigation'
import PumpInfo from '../components/PumpInfo/PumpInfo';
import PumpInfo2 from '../components/PumpInfo/PumpInfo2';
import PumpInfo3 from '../components/PumpInfo/PumpInfo3';
import PumpInfo4 from '../components/PumpInfo/PumpInfo4';

// export const AppNavigator = StackNavigator({
//     HomeScreen: {screen: Home},
//     PumpInfoScreen: {
//         screen: createBottomTabNavigator ({
//                 Pump001: PumpInfo,
//                 Pump002:  PumpInfo2,
//                 Pump003: PumpInfo3,
//                 Pump004:  PumpInfo4,
//             })
//     }
// });

export const AppNavigator = createBottomTabNavigator({
            Pump001: PumpInfo,
            Pump002:  PumpInfo2,
            Pump003: PumpInfo3,
            Pump004:  PumpInfo4,
        }, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
    },
})
