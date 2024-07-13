import React from 'react';
import InputComponent from "./InputComponent";
import Button from "./Button";
import {Wrapper} from "./Wrapper";
import {SectionWrapper} from "./SectionWrapper";
import  {UpperWrapperStyled} from "./UpperWrapper";

const SettingComponent = () => {
    return (

            <SectionWrapper>
                <UpperWrapperStyled >
                    <InputComponent fieldName={'maxValue'}/>
                    <InputComponent fieldName={'startValue'}/>
                </UpperWrapperStyled>
                <Wrapper  justify={'center'}>
                    <Button buttonFunction={'SET'}></Button>
                </Wrapper>
            </SectionWrapper>


    );
};

export default SettingComponent;

