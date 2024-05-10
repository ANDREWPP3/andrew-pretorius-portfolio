import styled, { keyframes } from "styled-components";
import { SIZE } from "../../const/sizes";
const appear = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }`;
export const ScreenShotApp = styled.img`
width : ${SIZE.COMPONENTS.LG};
height : ${SIZE.COMPONENTS.XL};
animation: ${appear} 0.5s ease-in-out;
cursor : pointer;
`