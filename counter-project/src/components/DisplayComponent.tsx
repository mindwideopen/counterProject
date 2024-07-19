import React from 'react';
import {SpanComponent} from "./SpanComponent";
import {LowerWrapper} from "./Wrapper";
import {Button} from "./Button";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";

type DisplayValuePropsType = {
    value: string,
    increment: () => void,
    reset: () => void,
    buttonMode: boolean,
    maxValue: number,
    displayWarning: boolean


}


export const DisplayComponent = (props: DisplayValuePropsType) => {



     return (
         <SectionWrapper>

                 <UpperWrapperStyled>
                     <SpanComponent value={props.value}

                                    displayWarning={props.displayWarning}/>

                 </UpperWrapperStyled>
                 <LowerWrapper justify={'space-around'}>
                     <Button buttonName={'INC'} callback={props.increment} buttonMode={props.buttonMode}></Button>
                     <Button buttonName={'RESET'} callback={props.reset}></Button>
                 </LowerWrapper>


         </SectionWrapper>
     );
 };



