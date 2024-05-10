import styled from "styled-components";
import { SIZE } from "../../const/sizes";

export const BulletContainer = styled.ul`
    list-style-type: disc; 
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.aligndata ? props.aligndata : "center"}; 
    padding: ${SIZE.SPACING.XL};
    margin: 0;
`