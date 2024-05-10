import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const DropdownOption = styled.div`
    padding : ${SIZE.SPACING.SM};
    width : ${SIZE.COMPONENTS.COVER};
    background-color : ${(props) => THEME(props.theme).BUTTON};
    text-align : center;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT}; 
    transition: all 0.2s ease-in-out;
    opacity: 0;
    transform: scale(0);
    cursor : pointer;
    &:first-child {
        border-top-left-radius: ${SIZE.BORDER_RADIUS.ROUNDED};;
        border-top-right-radius: ${SIZE.BORDER_RADIUS.ROUNDED};;
    }
    &:last-child {
        border-bottom-left-radius: ${SIZE.BORDER_RADIUS.ROUNDED};;
        border-bottom-right-radius: ${SIZE.BORDER_RADIUS.ROUNDED};;
    }
    &:hover {
        color: ${(props) => THEME(props.theme).SECONDARY_TEXT};
        cursor : pointer;
    }
    &.show-drop-contents {
        opacity: 1;
        transform: scale(1);
    }

`