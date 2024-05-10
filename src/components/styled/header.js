import styled from "styled-components";
import { THEME } from "../../const/themes";
import { SIZE } from "../../const/sizes";


export const Header = styled.div`
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    font-size : ${SIZE.FONT.HEADER};
    
`