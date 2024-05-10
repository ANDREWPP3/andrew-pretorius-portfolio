import styled from "styled-components";
import { THEME } from "../../const/themes";

export const HyperLink = styled.a`
    color : ${(props) => THEME(props.theme).SECONDARY_TEXT};
    text-decoration : underline;
    &:hover {
        color: ${(props) => THEME(props.theme).ACCENT};
        cursor : pointer;
    }
`