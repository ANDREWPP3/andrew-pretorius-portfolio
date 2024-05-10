import styled from "styled-components";

export const HorizontalFlexColumn = styled.div`
    display : flex;
    justify-content : ${(props) => props.align ? props.align : "center"};
    flex : ${(props) => props.flex ? props.flex : 1};
`