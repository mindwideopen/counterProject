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
    background-color: rgba(102, 210, 241);
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 900;
    &:hover:enabled {
        scale: 1.1;
    }

    &:active:enabled {
        scale: 1.4;

        background-color: rgba(102, 210, 241);
        
    }
    &:disabled {
        background-color: rgba(62, 109, 127)
        
}
    &:focus {
        outline: black;
    }


`