import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const ContentHead = styled.div`
    font-size : ${SIZE.FONT.SUB_HEADER};
    display : inline-block;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    margin : auto;
`
