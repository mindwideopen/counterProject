import React from 'react';
import styled from "styled-components";

type SpanComponentProps = {

   value: string


}

export const SpanComponent = (props: SpanComponentProps) => {

    return (

            <span>{props.value}</span>

    );
};


