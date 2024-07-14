import React, {useState} from 'react';
import {InputComponent} from "./InputComponent";
import Button from "./Button";
import {Wrapper} from "./Wrapper";
import {SectionWrapper} from "./SectionWrapper";
import  {UpperWrapperStyled} from "./UpperWrapper";

type SettingComponentPropsType = {
    setMaxValueCallback: (value: number) => void
    setStartValueCallback: (value: number) => void
    maxValue: number
    startValue: number
}


export const SettingComponent = (props: SettingComponentPropsType) => {

    const [maxValue, setMaxValue] = useState<number>(props.maxValue);
    const [startValue, setStartValue] = useState<number>(props.startValue);



    const toSetMaxValueFunction = (value: number) => {
        setMaxValue(value);
    }
    const setStartValueFunction = (value: number) => {
        setStartValue(value);
    }
    const setValues = (maxValue: number, startValue: number) => {
        props.setMaxValueCallback(maxValue)
        props.setStartValueCallback(startValue)
    }



    const setValuesFunction = () => {
        setValues(maxValue, startValue)

    }



    return (

            <SectionWrapper>
                <UpperWrapperStyled >
                    <InputComponent fieldName={'maxValue'} callBack={toSetMaxValueFunction}  value={maxValue}  />
                    <InputComponent fieldName={'startValue'} callBack={setStartValueFunction} value={startValue} />
                </UpperWrapperStyled>
                <Wrapper  justify={'center'}>
                    <Button buttonFunction={'SET'}
                            callback={setValuesFunction} ></Button >
                </Wrapper>
            </SectionWrapper>


    );
};



