import React from 'react';



type SpanComponentProps = {

    value: string,
    maxValue?: number,
    displayWarning?: boolean


}

export const SpanComponent = (props: SpanComponentProps) => {

    return (
        <span className={props.displayWarning ? 'inputWarning' : undefined}>
            {props.value}
        </span>

    );
};


