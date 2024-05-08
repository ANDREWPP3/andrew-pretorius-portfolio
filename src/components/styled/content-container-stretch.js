import styled from 'styled-components';
import { THEME } from '../../const/themes';

export const ContentContainerStretch = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT}
`
