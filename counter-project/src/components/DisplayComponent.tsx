import React from 'react';
import styled from "styled-components";
import SpanComponent from "./SpanComponent";
import {Wrapper} from "./Wrapper";
import Button from "./Button";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";

const DisplayComponent = () => {
    return (
        <SectionWrapper>

                <UpperWrapperStyled>
                    <SpanComponent fieldName={'value'}/>
                </UpperWrapperStyled>
                <Wrapper justify={'space-around'}>
                    <Button buttonFunction={'INC'}></Button>
                    <Button buttonFunction={'RESET'}></Button>
                </Wrapper>


        </SectionWrapper>
    );
};

export default DisplayComponent;

