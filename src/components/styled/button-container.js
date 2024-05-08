import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    transform: scale(0);
    padding : 5px;
    cursor: pointer;

    &.show {
        opacity: 1;
        transform: scale(1);
    }
`