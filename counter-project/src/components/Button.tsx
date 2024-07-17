import React from 'react';
import styled from "styled-components";


type ButtonPropsType = {
    children?: React.ReactNode;     //---------------------------??????????-------------------------------
    buttonFunction: string,
    callback: () => void,
    buttonMode?: boolean,

}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (

        <ButtonStyled onClick={onClickHandler} disabled={props.buttonMode}>
            {props.buttonFunction}
        </ButtonStyled>

    );
};



const ButtonStyled = styled.button`
background-color: red;

`