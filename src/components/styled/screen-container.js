import styled, { keyframes } from "styled-components";
import { THEME } from "../../const/themes";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util/screen-util";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const ScreenContainer = styled.div`
    width : ${SCREEN_WIDTH}px;
    height : ${SCREEN_HEIGHT}px;
    background : ${(props) => THEME(props.theme).BACKGROUND};
    position : relative;
    animation: ${fadeIn} 0.4s ease-in-out;
    
`