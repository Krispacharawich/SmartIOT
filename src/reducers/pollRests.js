const INITIAL_DATA = {
    p1: {},
    p2: {},
    p3: {},
    p4: {},
    p1Arr: [0],
    p2Arr: [0],
    p3Arr: [0],
    p4Arr: [0],
    currentPump: 0
}
const polls = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            console.log([...state])
            return [...state]
            break;
        case 'FILTER_PUMP':
            return state.map(pumps =>
                (pumps.id === action.id) ? {
                    ...pumps
                } : null)
            break;
        case 'SUCCESS':
            console.log("Reducer: ");
            console.log(state);
            if (action.id == 1) {
                let newArr = [...state.p1Arr];
                newArr.push(action.dt.data.speed);
                return Object.assign({}, state, {p1: action.dt, currentPump: 1, p1Arr: newArr})
            } else if (action.id == 2) {
                let newArr = [...state.p2Arr];
                newArr.push(action.dt.data.speed);
                return Object.assign({}, state, {p2: action.dt, currentPump: 2, p2Arr: newArr})
            } else if (action.id == 3) {
                let newArr = [...state.p3Arr];
                newArr.push(action.dt.data.speed);
                return Object.assign({}, state, {p3: action.dt, currentPump: 3, p3Arr: newArr})
            } else if (action.id == 4) {
                let newArr = [...state.p4Arr];
                newArr.push(action.dt.data.speed);
                return Object.assign({}, state, {p4: action.dt, currentPump: 4, p4Arr: newArr})
            }
            // return Object.assign({},state, {mindsphere: action.dt })
            return state;
            break;
        case 'ERROR':
            console.log("ERROR")
            console.log(state)
            return state
            break;
        default:
            console.log("DEFAULT")
            console.log(state)
            return state
    }
}

export default polls;