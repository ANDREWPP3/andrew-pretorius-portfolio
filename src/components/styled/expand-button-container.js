import styled from "styled-components";
import { SIDE_BAR_WIDTH } from "../../util/screen-util";
import { THEME } from "../../const/themes";
import { SIZE } from "../../const/sizes";

export const ExpandButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: ${(props) => props.expanded ? SIDE_BAR_WIDTH : 0}; /* Expand button position */
    transform: translateY(-50%); /* Vertical centering */
    transition: left 0.3s ease; /* Smooth animation */    
    cursor: pointer;
`