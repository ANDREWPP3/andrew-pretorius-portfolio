import styled from "styled-components";
import { THEME } from "../../const/themes";
import { SIZE } from "../../const/sizes";

export const Button = styled.button`
background-color : ${(props) => THEME(props.theme).BUTTON};
border : none;
color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
padding : ${SIZE.SPACING.SM};
margin-right : ${SIZE.SPACING.SM};
margin-left : ${SIZE.SPACING.SM};
&:hover {
    color: ${(props) => THEME(props.theme).SECONDARY_TEXT};
    cursor : pointer;
}
border-radius : ${SIZE.BORDER_RADIUS.ROUNDED};
width : ${SIZE.COMPONENTS.MD};
height : ${SIZE.COMPONENTS.SM};
`