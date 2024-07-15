import {InputComponent} from "./InputComponent";
import {Button} from "./Button";
import {Wrapper} from "./Wrapper";
import {SectionWrapper} from "./SectionWrapper";
import {UpperWrapperStyled} from "./UpperWrapper";

type SettingComponentPropsType = {
    setMaxValueFunction: (value: number) => void,
    setStartValueFunction: (value: number) => void,
    maxValue: number,
    startValue: number,
    setToLocalStorage: () => void,

}
export const SettingComponent = (props:SettingComponentPropsType) => {

    const setMaxValueFunction = (value: number) => {
        props.setMaxValueFunction(value);
    }
    const setStartValueFunction = (value: number) => {
        props.setStartValueFunction(value);
    }

    const setToLocalStorage = () => {
        props.setToLocalStorage()


    }


    return (

        <SectionWrapper>
            <UpperWrapperStyled>
                <InputComponent fieldName={'maxValue'} callBack={setMaxValueFunction} value={props.maxValue}/>
                <InputComponent fieldName={'startValue'} callBack={setStartValueFunction} value={props.startValue}/>
            </UpperWrapperStyled>
            <Wrapper justify={'center'}>
                <Button buttonFunction={'SET'}
                        callback={setToLocalStorage}
                >
                </Button>
            </Wrapper>
        </SectionWrapper>


    );
};



