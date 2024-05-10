import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SIZE } from '../../const/sizes';
import { THEME } from '../../const/themes';

export const ScreenHead = styled.div`
    display : inline-block;
    font-size : ${SIZE.FONT.HEADER};
    color : ${(props) => THEME(props.theme).PRIMARY_TEXT};
    margin : auto;
`