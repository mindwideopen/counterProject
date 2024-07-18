import React, {ChangeEvent} from 'react';
import {SpanComponent} from "./SpanComponent";




type InputComponentType = {

    fieldName: string,
    callBack: (value: number) => void,
    value: number,
    displayHint: () => void,
    inputWarning: boolean


}

export const InputComponent = (props: InputComponentType) => {

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callBack(parseInt(e.currentTarget.value, 10));
    props.displayHint()
}



    return (
        <div>
            <SpanComponent value={props.fieldName} />
            <input  className={props.inputWarning ? 'inputWarning': undefined} value={props.value}
                    type={'number'}
                    onChange={onChangeHandler} ></input>
        </div>
    );
};





