import React from 'react';
import {SpanComponent} from "./SpanComponent";
import {Wrapper} from "./Wrapper";
import {Button} from "./Button";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";

type DisplayValuePropsType = {
    value: string,
    increment: () => void,
    reset: () => void,
    buttonMode: boolean,
    maxValue: number,
    displayWarning: boolean,
    callBack: () => void


}


export const DisplayComponent = (props: DisplayValuePropsType) => {


    return (
        <SectionWrapper>

            <UpperWrapperStyled>
                <SpanComponent value={props.value}

                               displayWarning={props.displayWarning}/>

            </UpperWrapperStyled>
            <Wrapper justify={'space-around'}
                     border>
                <Button buttonName={'INC'} callback={props.increment} buttonMode={props.buttonMode}></Button>
                <Button buttonName={'RESET'} callback={props.reset}></Button>
                <Button buttonName={'SET'} callback={props.callBack}></Button>
            </Wrapper>


        </SectionWrapper>
    );
};



