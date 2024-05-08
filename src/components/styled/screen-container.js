import styled from "styled-components";
import { THEME } from "../../const/themes";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util/screen-util";

export const ScreenContainer = styled.div`
    width : ${SCREEN_WIDTH}px;
    height : ${SCREEN_HEIGHT}px;
    background : ${(props) => THEME(props.theme).BACKGROUND};
    position : relative;
`