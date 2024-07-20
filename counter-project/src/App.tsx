import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {useEffect, useState} from "react";
import {DisplayComponent} from "./components/DisplayComponent";


function App() {

    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [disableSetButton, setDisableSetButton] = useState<boolean>(true)
    const [incrementButtonMode, setIncrementButtonMode] = useState<boolean>(false)
    const [inputWarning, setInputWarning] = useState<boolean>(false)
    const [displayWarning, setDisplayWarning] = useState<boolean>(false)
    const [counterMode, setCounterMode] = useState<boolean>(true)






    useEffect(() => {
        getLocalStorage()
    }, [])

    useEffect(() => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {           //перенести проверку в setValue
            setDisableSetButton(true)
            setDisplayValue('INCORRECT VALUE')
            setInputWarning(true)
            setDisplayWarning(true)
        } else {
            setDisplayValue('select appropriate maxValue and startValue')
            setDisableSetButton(false)
            setIncrementButtonMode(true)
            setInputWarning(false)
            setDisplayWarning(false)
        }
    }, [startValue, maxValue]);




    const setMaxValueFunction = (value: number) => {
        setMaxValue(value);
    }

    const setStartValueFunction = (value: number) => {

        setStartValue(value)
    }

    const setButtonHandler = () => {

        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        setDisplayValue(JSON.stringify(startValue))
        setDisableSetButton(true)
        setIncrementButtonMode(false)
        setCounterMode(!counterMode)

    }

    const getLocalStorage = () => {
        let maxValueToString = localStorage.getItem('maxValue');
        let startValueToString = localStorage.getItem('startValue');
        if (maxValueToString) {
            setMaxValue(JSON.parse(maxValueToString))
        }
        if (startValueToString) {
            setStartValue(JSON.parse(startValueToString))
        }
    }

    const increment = () => {
        if ((Number(displayValue) + 1) === maxValue) {
            setIncrementButtonMode(true)
            setDisplayWarning(true)

            setDisplayValue(JSON.stringify(Number(displayValue) + 1))
        } else
            setDisplayValue(JSON.stringify(Number(displayValue) + 1))
    }

    const reset = () => {
        setDisplayValue(JSON.stringify(startValue))
        setIncrementButtonMode(false)
        setDisplayWarning(false)
    }

    const inputChangeHandler = () => {


    }

    const modeSetter = () => {
        setCounterMode(!counterMode)
        setDisableSetButton(false)
    }
    console.log('counterMode '+ counterMode)




    return (
        <div className={"App"}>
            {counterMode ?


            <SettingComponent setMaxValueFunction={setMaxValueFunction}
                              setStartValueFunction={setStartValueFunction}
                              maxValue={maxValue}
                              startValue={startValue}
                              setToLocalStorage={setButtonHandler}
                              displayHint={inputChangeHandler}
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







