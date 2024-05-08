import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const TextContainer = styled.div`
    margin-top : ${SIZE.SPACING.MD};
    width : ${SIZE.COMPONENTS.COVER};
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    text-align : center;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    border : 3px solid ${((props) => THEME(props.theme).ACCENT)};
    border-radius : ${SIZE.BORDER_RADIUS.ROUNDED};
    padding : ${SIZE.SPACING.LG};
`