import {MaxValueType} from "../../App";
import {configureStore} from "@reduxjs/toolkit";


const initialMaxValueState:MaxValueType = {
    maxValue: 5
}


export const reducer = (state: MaxValueType = initialMaxValueState, action: ActionTypes):MaxValueType => {
    switch (action.type) {
        case "SET_MAX_VALUE": {
            return {maxValue: action.payload.value}
        }
        default:
            return state;
    }
}


type ActionTypes = setMaxValueAC

type setMaxValueAC = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: {
            value
        }
    } as const
}

export const store = configureStore({
    reducer: reducer,
})
