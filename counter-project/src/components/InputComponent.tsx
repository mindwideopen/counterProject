import React, {ChangeEvent} from 'react';
import {SpanComponent} from "./SpanComponent";
import styled from "styled-components";


type InputComponentType = {

    fieldName: string,
    callBack: (value: number) => void,
    value: number,
    displayHint: () => void,
    inputWarning: boolean

}
type InputStyledPropsType = {
    inputWarning: boolean,
    value: number,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}


export const InputComponent = (props: InputComponentType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(parseInt(e.currentTarget.value, 10));
        props.displayHint()
    }


    return (
        <div>
            <SpanComponent value={props.fieldName}/>
            <InputStyled inputWarning={props.inputWarning}
                         value={props.value}
                         type={'number'}
                         onChange={onChangeHandler}></InputStyled>
        </div>
    );
};


const InputStyled = styled.input<InputStyledPropsType>`
`





