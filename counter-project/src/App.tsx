import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {useEffect, useState} from "react";
import {DisplayComponent} from "./components/DisplayComponent";


function App() {


    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<string>('0');


    useEffect(() => {
        getLocalStorage()
    }, [])

    const setMaxValueFunction = (value: number) => {

        setMaxValue(value);

    }

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
        // debugger

        setDisplayValue((Number(displayValue) + 1 ).toString())
    }

    const reset = () => {
        setMaxValue(0)
        setStartValue(0)
        setDisplayValue('0')


    }

  const displayHint = () => {
      setDisplayValue('hi')

  }


    return (
        <div className={"App"}>
            <SettingComponent setMaxValueFunction={setMaxValueFunction}
                              setStartValueFunction={setStartValueFunction}
                              maxValue={maxValue.toString()}
                              startValue={startValue.toString()}
                              setToLocalStorage={setToLocalStorage}
                              displayHint={displayHint}

            />
            <DisplayComponent value={displayValue}
                              increment={increment}
                              reset={reset}

                              />

        </div>

    );
}

export default App;







