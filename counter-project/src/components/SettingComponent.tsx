import React, {useEffect, useState} from 'react';
import {InputComponent} from "./InputComponent";
import Button from "./Button";
import {Wrapper} from "./Wrapper";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";


export const SettingComponent = () => {

    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

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

        <SectionWrapper>
            <UpperWrapperStyled>
                <InputComponent fieldName={'maxValue'} callBack={setMaxValueFunction} value={maxValue}/>
                <InputComponent fieldName={'startValue'} callBack={setStartValueFunction} value={startValue}/>
            </UpperWrapperStyled>
            <Wrapper justify={'center'}>
                <Button buttonFunction={'SET'}
                        callback={setToLocalStorage}></Button>
            </Wrapper>
        </SectionWrapper>


    );
};



