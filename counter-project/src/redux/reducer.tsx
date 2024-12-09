const initialState = {
    maxValue: 0,
    startValue: 0,
    displayValue: '0',
    disableSetButton: false,
    incrementButtonMode: false,
    counterMode: true,
    displayWarning: false,
    inputWarning: false

};
export type StateType = typeof initialState;


export const reducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {


        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.payload};
        case 'SET_START_VALUE':
            return {...state, startValue: action.payload};
        case 'SET_DISPLAY_VALUE':
            return {...state, displayValue: action.payload};
        case 'SET_DISABLE_SET_BUTTON':
            return {...state, disableSetButton: action.payload};
        case 'SET_INCREMENT_BUTTON_MODE':
            return {...state, incrementButtonMode: action.payload};
        case 'SET_COUNTER_MODE':
            return {...state, counterMode: action.payload};
        case 'SET_DISPLAY_WARNING':
            return {...state, displayWarning: action.payload};
        case 'INCREMENT_VALUE':
            const nextValue = Number(state.displayValue) + 1;
            return {
                ...state,
                displayValue: String(nextValue),
                incrementButtonMode: nextValue >= state.maxValue,
                displayWarning: nextValue >= state.maxValue,
            };
        case 'RESET_COUNTER':
            return {
                ...state,
                displayValue: String(state.startValue),
                incrementButtonMode: false,
                displayWarning: false,
            };
        case 'SET_INPUT_WARNING': // Новый кейс для управления inputWarning
            return { ...state, inputWarning: action.payload };
        default:
            return state;
    }
};


type ActionTypes =
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setDisplayValue>
    | ReturnType<typeof setDisableSetButton>
    | ReturnType<typeof setIncrementButtonMode>
    | ReturnType<typeof setCounterMode>
    | ReturnType<typeof setDisplayWarning>
    | ReturnType<typeof incrementValue>
    | ReturnType<typeof resetCounter>
    | setMaxValueACType
    | ReturnType<typeof setInputWarning>

export const setMaxValue = (value: number) => ({
    type: 'SET_MAX_VALUE',
    payload: value,
} as const);

export const setStartValue = (value: number) => ({
    type: 'SET_START_VALUE',
    payload: value,
} as const);

export const setDisplayValue = (value: string) => ({
    type: 'SET_DISPLAY_VALUE',
    payload: value,
} as const);

export const setDisableSetButton = (value: boolean) => ({
    type: 'SET_DISABLE_SET_BUTTON',
    payload: value,
} as const);

export const setIncrementButtonMode = (value: boolean) => ({
    type: 'SET_INCREMENT_BUTTON_MODE',
    payload: value,
} as const);

export const setCounterMode = (value: boolean) => ({
    type: 'SET_COUNTER_MODE',
    payload: value,
} as const);

export const setDisplayWarning = (value: boolean) => ({
    type: 'SET_DISPLAY_WARNING',
    payload: value,
} as const);

export const incrementValue = () => ({
    type: 'INCREMENT_VALUE',
} as const);

export const resetCounter = () => ({
    type: 'RESET_COUNTER',
} as const);

type setMaxValueACType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: value
    } as const
}

export const setInputWarning = (value: boolean) => ({
    type: 'SET_INPUT_WARNING',
    payload: value,
} as const);

