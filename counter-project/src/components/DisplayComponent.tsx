import React from 'react';
import {SpanComponent} from "./SpanComponent";
import {Wrapper} from "./Wrapper";
import {Button} from "./Button";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";

type DisplayValuePropsType = {
    displayValue: number,
    increment: () => void,
    reset: () => void
}


export const DisplayComponent = (props: DisplayValuePropsType) => {



     return (
         <SectionWrapper>

                 <UpperWrapperStyled>
                     <SpanComponent displayValue={props.displayValue}/>
                 </UpperWrapperStyled>
                 <Wrapper justify={'space-around'}>
                     <Button buttonFunction={'INC'} callback={props.increment}></Button>
                     <Button buttonFunction={'RESET'} callback={props.reset}></Button>
                 </Wrapper>


         </SectionWrapper>
     );
 };



