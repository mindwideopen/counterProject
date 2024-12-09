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

    buttonMode: boolean,
    inputWarning: boolean


}
export const SettingComponent = (props: SettingComponentPropsType) => {


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
            <UpperWrapperStyled >
                <InputComponent fieldName={'maxValue'}
                                callBack={setMaxValueFunction}
                                value={props.maxValue}

                                inputWarning={props.inputWarning}/>
                <InputComponent fieldName={'startValue'}
                                callBack={setStartValueFunction}
                                value={props.startValue}

                                inputWarning={props.inputWarning}/>
            </UpperWrapperStyled>
            <Wrapper justify={'center'}
            border>
                <Button buttonName={'SET'}
                        callback={setToLocalStorage}
                        buttonMode={props.buttonMode}>
                </Button>

            </Wrapper>
        </SectionWrapper>


    );
};



