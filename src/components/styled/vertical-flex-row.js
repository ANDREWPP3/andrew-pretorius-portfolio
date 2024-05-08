import styled from "styled-components";

export const VerticalFlexRow = styled.div`
    display : flex;
    justify-content : center;
    align-items: center;
    flex : ${(props) => props.flex ? props.flex : 1};

`