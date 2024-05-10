import styled from "styled-components";
import { THEME } from "../../const/themes";
import { SIZE } from "../../const/sizes";

export const ContentGroup = styled.div`
width : ${SIZE.COMPONENTS.COVER};
margin-top : ${SIZE.SPACING.MD};
text-align : center;
color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
border : 3px solid ${(props) => THEME(props.theme).ACCENT};
border-radius : ${SIZE.BORDER_RADIUS.ROUNDED};
padding : ${SIZE.SPACING.MD};
`