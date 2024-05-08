import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../const/sizes';
import { THEME } from '../../const/themes';

export const ScreenHead = styled.div`
    width : ${SIZE.COMPONENTS.COVER};
    text-align : center;
    font-size : ${SIZE.FONT.HEADER};
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    text-decoration : underline;
`