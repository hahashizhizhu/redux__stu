//加工  真正操作的地方

import {INCREMENT,DECREMENT} from './action_types'

let initState = 0
export default function (preState = initState,action) {
    let {type,data} = action

    let newState

    switch (type) {
        case INCREMENT:
            newState = preState + data
            return newState
            case DECREMENT:
                newState = preState - data
            return newState
        default:
            return preState
    }
}