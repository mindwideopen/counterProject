
import styled from "styled-components";

type WrapperProps = {
    direction?: string,
    justify?: string,
    align?: string,
    alignContent?: string,
    width?: string,
    border?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    align-content: ${props => props.alignContent};
    width: ${props => props.width};
    padding: 10px;
    margin-top: 10px;
    border: ${props => props.border? '2px solid rgba(102, 210, 241)': ''};
    border-radius: 5px;
    
    
   
`
