import styled from "styled-components";
import { SIZE } from "../../const/sizes";

export const TitleBarContent = styled.div`
    display : flex;
    justify-content : ${(props) => props.flexend ? "flex-end" : "flex-start"};
    flex : ${(props) => props.flex ? props.flex : 1};
    padding-right : ${(props) => props.flexend ? SIZE.SPACING.SM : undefined};
    padding-left : ${(props) => props.flexend ? undefined : SIZE.SPACING.SM};
   
`