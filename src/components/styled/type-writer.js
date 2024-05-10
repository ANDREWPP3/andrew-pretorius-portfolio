import styled, { keyframes } from "styled-components";
import { SIZE } from "../../const/sizes";

const typewriteranimation = keyframes`
    from {
        visibility : hidden;
        width: 0;  // Start with no text visible
    }
    to {
        visibility : visible;
        width: ${SIZE.COMPONENTS.COVER};  // Reveal all text
    }`;
export const TypeWriter = styled.div`
    animation: ${typewriteranimation} 0.5s steps(100, end);  
    animation-delay : ${(props) => props.delay ? props.delay+"s" : undefined};
    animation-fill-mode: forwards;
    visibility : hidden;
    white-space: nowrap;  // Keep text on one line
    overflow: hidden;  // Hide text that overflows
    margin : auto;
`