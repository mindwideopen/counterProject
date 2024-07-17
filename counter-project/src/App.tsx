import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {useEffect, useState} from "react";
import {DisplayComponent} from "./components/DisplayComponent";


function App() {


    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<string>(JSON.stringify(startValue));
    const [setButtonMode, setSetButtonMode] = useState<boolean>(true)
    const [incrementButtonMode, setIncrementButtonMode] = useState<boolean>(true)



    useEffect(() => {
        getLocalStorage()
    }, [])

    const setMaxValueFunction = (value: number) => {

        setMaxValue(value);

    }

    const setStartValueFunction = (value: number) => {
        setStartValue(value);
    }


    const setButtonHandler = () => {

        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        setDisplayValue(JSON.stringify(startValue))
        setSetButtonMode(true)
        setIncrementButtonMode(false)

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


        setDisplayValue(JSON.stringify(Number(displayValue) + 1) )


    }

    const reset = () => {

        setDisplayValue('0')


    }

  const inputChangeHandler = () => {
      setDisplayValue('select appropriate maxValue and startValue')
      setSetButtonMode(false)
  }


    return (
        <div className={"App"}>
            <SettingComponent setMaxValueFunction={setMaxValueFunction}
                              setStartValueFunction={setStartValueFunction}
                              maxValue={JSON.stringify(maxValue)}
                              startValue={JSON.stringify(startValue)}
                              setToLocalStorage={setButtonHandler}
                              displayHint={inputChangeHandler}
                              buttonMode={setButtonMode}


            />
            <DisplayComponent value={displayValue}
                              increment={increment}
                              reset={reset}
                              buttonMode={incrementButtonMode}

                              />

        </div>

    );
}

export default App;







