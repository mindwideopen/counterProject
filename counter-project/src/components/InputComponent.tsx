import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {SpanComponent} from "./SpanComponent";




type InputComponentType = {
    fieldName: string,
    callBack: (value: number) => void,
    value: string,
    displayHint: () => void


}

export const InputComponent = (props: InputComponentType) => {

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callBack(parseInt(e.currentTarget.value, 10));
    props.displayHint()

}



    return (
        <div>
            <SpanComponent value={props.fieldName}/>
            <InputStyled  value={props.value} type={'number'}  onChange={onChangeHandler} ></InputStyled>
        </div>
    );
};




  const InputStyled = styled.input`
    max-width: 150px;
    outline: none;
    text-align: center;    
    
`
