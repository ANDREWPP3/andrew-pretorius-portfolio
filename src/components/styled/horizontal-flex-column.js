import styled from "styled-components";

export const HorizontalFlexColumn = styled.div`
    display : flex;
    justify-content : ${(props) => props.alignstart ? "flex-start" : "center"};
    align-items: center;
    flex : ${(props) => props.flex ? props.flex : 1};

`