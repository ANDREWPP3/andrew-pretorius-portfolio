import styled, { keyframes } from "styled-components";
const appear = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }`;
export const EnlargedScreenShot = styled.img`
    width : ${(props) => props.app ? undefined : '55%'};
    height : ${(props) => props.app ? '75%' : undefined};
    animation: ${appear} 0.5s ease-in-out;
`