import styled, { keyframes } from "styled-components";
import { SIZE } from "../../const/sizes";
const appear = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }`;
export const ScreenShot = styled.img`
    width : ${SIZE.COMPONENTS.XL};
    height : ${SIZE.COMPONENTS.LG};
    animation: ${appear} 0.5s ease-in-out;
    cursor : pointer;
`