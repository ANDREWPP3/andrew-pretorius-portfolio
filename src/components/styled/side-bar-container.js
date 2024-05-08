import styled from "styled-components";
import { SCREEN_HEIGHT, SIDE_BAR_WIDTH } from "../../util/screen-util";
import { THEME } from "../../const/themes";

export const SideBarContainer = styled.div`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.expanded ? '0' : "-"+SIDE_BAR_WIDTH)}; /* Sidebar position */
    transform: translateY(-50%); /* Vertical centering */
    width: ${SIDE_BAR_WIDTH};
    height: ${SCREEN_HEIGHT}px; /* Adjust height as needed */
    background-color: ${(props) => THEME(props.theme).ACCENT_TRANSPARENT};
    transition: left 0.3s ease; /* Smooth animation */
    border : 5px solid ${(props) => THEME(props.theme).ACCENT};

`