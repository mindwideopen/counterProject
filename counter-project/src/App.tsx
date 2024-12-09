import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {useEffect} from "react";
import {DisplayComponent} from "./components/DisplayComponent";
import {useDispatch, useSelector} from "react-redux";
import {setInputWarning, setMaxValueAC, StateType} from "./redux/reducer";

import {
    setMaxValue,
    setStartValue,
    setDisplayValue,
    setDisableSetButton,
    setIncrementButtonMode,
    setCounterMode,
    setDisplayWarning,
    incrementValue,
    resetCounter,
} from './redux/reducer';





function App() {

    const dispatch = useDispatch();
    const maxValue = useSelector((state: StateType) => state.maxValue);
    const startValue = useSelector((state: StateType) => state.startValue);
    const displayValue = useSelector((state: StateType) => state.displayValue);
    const disableSetButton = useSelector((state: StateType) => state.disableSetButton);
    const incrementButtonMode = useSelector((state: StateType) => state.incrementButtonMode);
    const counterMode = useSelector((state: StateType) => state.counterMode);
    const displayWarning = useSelector((state: StateType) => state.displayWarning);
    const inputWarning = useSelector((state: StateType) => state.displayWarning);
    const setMaxValueFunction = (value: number) => dispatch(setMaxValue(value));
    const setStartValueFunction = (value: number) => dispatch(setStartValue(value));


    useEffect(() => {
        getLocalStorage()
    }, [])

    useEffect(() => {

        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {           //перенести проверку в setValue
            dispatch (setDisableSetButton(true))
            dispatch (setDisplayValue('INCORRECT VALUE'))
            dispatch (setInputWarning(true))
            dispatch (setDisplayWarning(true))
        } else {
            dispatch ((setDisplayValue('select appropriate maxValue and startValue')))
            dispatch (setDisableSetButton(false))
            dispatch (setIncrementButtonMode(true))
            dispatch (setInputWarning(false))
            dispatch (setDisplayWarning(false))
        }
    }, [startValue, maxValue]);




    const setButtonHandler = () => {
        localStorage.setItem('maxValue', String(maxValue));
        localStorage.setItem('startValue', String(startValue));
        dispatch(setDisplayValue(String(startValue)));
        dispatch(setDisableSetButton(true));
        dispatch(setIncrementButtonMode(false));
        dispatch(setCounterMode(!counterMode));
    };

    const getLocalStorage = () => {
        let maxValueToString = localStorage.getItem('maxValue');
        let startValueToString = localStorage.getItem('startValue');
        if (maxValueToString) {
            dispatch(setMaxValueAC(JSON.parse(maxValueToString)))

        }
        if (startValueToString) {
            setStartValue(JSON.parse(startValueToString))
        }
    }

    const increment = () => dispatch(incrementValue());
    const reset = () => dispatch(resetCounter());



    const modeSetter = () => dispatch(setCounterMode(!counterMode));



    return (
        <div className={"App"}>
            {counterMode ?


                <SettingComponent setMaxValueFunction={setMaxValueFunction}
                                  setStartValueFunction={setStartValueFunction}
                                  maxValue={maxValue}
                                  startValue={startValue}
                                  setToLocalStorage={setButtonHandler}
                                  buttonMode={disableSetButton}
                                  inputWarning={inputWarning}/>

                :
                <DisplayComponent value={displayValue}
                                  increment={increment}
                                  reset={reset}
                                  buttonMode={incrementButtonMode}
                                  callBack={modeSetter}
                                  maxValue={maxValue}
                                  displayWarning={displayWarning}/>
            }

        </div>

    );
}

export default App;







