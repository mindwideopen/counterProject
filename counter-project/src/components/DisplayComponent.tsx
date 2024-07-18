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
    displayWarning: boolean


}


export const DisplayComponent = (props: DisplayValuePropsType) => {



     return (
         <SectionWrapper>

                 <UpperWrapperStyled>
                     <SpanComponent value={props.value}
                                    maxValue={props.maxValue}
                                    displayWarning={props.displayWarning}/>

                 </UpperWrapperStyled>
                 <Wrapper justify={'space-around'}>
                     <Button buttonFunction={'INC'} callback={props.increment} buttonMode={props.buttonMode}></Button>
                     <Button buttonFunction={'RESET'} callback={props.reset}></Button>
                 </Wrapper>


         </SectionWrapper>
     );
 };



