import styled from "styled-components";
import { THEME } from "../../const/themes";
import { SIZE } from "../../const/sizes";

export const SubHeader = styled.div`
    color : ${(props) => THEME(props.theme).SECONDARY_TEXT};
    font-size : ${SIZE.FONT.SUB_HEADER}
`