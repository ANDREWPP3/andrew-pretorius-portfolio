import styled from "styled-components";
import { SIZE } from "../../const/sizes";

export const HorizontalFlexContainer = styled.div`
display : flex;
flex-direction : row;
align-items : center;
flex-wrap : wrap;
justify-content : center;
width : ${SIZE.COMPONENTS.COVER};
`