import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const ContentGroup = styled.div`
    width : ${SIZE.COMPONENTS.COVER};
    margin-top : ${SIZE.SPACING.MD};
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    border : 3px solid ${(props) => THEME(props.theme).ACCENT};
    border-radius : ${SIZE.BORDER_RADIUS.ROUNDED};
    padding : ${SIZE.SPACING.MD};
`