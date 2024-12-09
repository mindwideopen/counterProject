import styled from "styled-components";

type UpperWrapperStyledPropsType = {
    displayWarning?: boolean
}


export const UpperWrapperStyled = styled.div<UpperWrapperStyledPropsType>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
    padding: 10px 5px;
    border: 2px solid rgba(102, 210, 241);
    border-radius: 5px;
    min-height: 70px;
    position: relative;
    height: 100px;
   background-color: ${props => props.displayWarning?'red':''};

`