import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {useEffect, useState} from "react";
import {DisplayComponent} from "./components/DisplayComponent";


function App() {
    console.log('APP render')

    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<number>(0);
    console.log('после до колбека '+ maxValue)

    useEffect(() => {
        getLocalStorage()
    }, [])

    const setMaxValueFunction = (value: number) => {
        console.log('в колбеке до сета '+maxValue)
        setMaxValue(value);
        console.log('в колбеке после сета '+maxValue)
    }
    console.log('после после '+ maxValue)
    const setStartValueFunction = (value: number) => {
        setStartValue(value);
    }


    const setToLocalStorage = () => {

        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));

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
        setDisplayValue(displayValue + 1)
    }

    const reset = () => {
        setMaxValue(0)
        setStartValue(0)
        setDisplayValue(0)

    }


    return (
        <div className={"App"}>
            <SettingComponent setMaxValueFunction={setMaxValueFunction}
                              setStartValueFunction={setStartValueFunction}
                              maxValue={maxValue}
                              startValue={startValue}
                              setToLocalStorage={setToLocalStorage}

            />
            <DisplayComponent displayValue={displayValue}
                              increment={increment}
                              reset={reset}/>
        </div>

    );
}

export default App;







