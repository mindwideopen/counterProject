import React from 'react';
import styled from "styled-components";


type SpanComponentProps = {

    value: string,
    maxValue?: number


}

export const SpanComponent = (props: SpanComponentProps) => {

    return (
        <span className={props.value === 'Incorrect value!!!' || props.value === JSON.stringify(props.maxValue) ? 'warning' : undefined}>
            {props.value}
        </span>

    );
};


