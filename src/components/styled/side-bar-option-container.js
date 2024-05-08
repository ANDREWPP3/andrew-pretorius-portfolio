import styled from "styled-components";
import { SIZE } from "../../const/sizes";
import { THEME } from "../../const/themes";

export const SideBarOptionContainer = styled.div`
    padding-left : ${SIZE.SPACING.SM};
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    &:hover {
        color: ${(props) => THEME(props.theme).SECONDARY_TEXT};
        cursor : pointer;
    }
`