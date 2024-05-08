import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const DropdownOption = styled.div`
    padding : ${SIZE.SPACING.XS};
    width : ${SIZE.COMPONENTS.COVER};
    background-color : ${(props) => THEME(props.theme).BUTTON};
    text-align : left;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT}; 
    transition: all 0.2s ease-in-out;
    opacity: 0;
    transform: scale(0);
    cursor : pointer;
    &:hover {
        color: ${(props) => THEME(props.theme).SECONDARY_TEXT};
        cursor : pointer;
    }
    &.show-drop-contents {
        opacity: 1;
        transform: scale(1);
    }

`