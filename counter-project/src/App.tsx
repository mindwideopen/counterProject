import './App.css';
import {SettingComponent} from "./components/SettingComponent";
import {DisplayComponent} from "./components/DisplayComponent";
import {useEffect, useState} from "react";


function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

    useEffect(() =>  getLocalStorage(), [])

    useEffect(() => {
        setToLocalStorage()
    }, [maxValue, startValue]);


    const setMaxValueCallback = (value: number) => setMaxValue(value)


    const setStartValueCallback = (value: number) => setStartValue(value)


    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));

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
        return (
            <div className={"App"}>
                <SettingComponent setMaxValueCallback={setMaxValueCallback}
                                  setStartValueCallback={setStartValueCallback}
                                  maxValue={maxValue}
                                  startValue={startValue}/>
                {/*<DisplayComponent/>*/}
            </div>


        );
    }

    export default App;







