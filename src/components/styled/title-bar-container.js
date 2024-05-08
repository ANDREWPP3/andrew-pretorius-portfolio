import React from 'react';
import styled from 'styled-components';
import { SCREEN_WIDTH, TITLE_BAR_HEIGHT } from '../../util/screen-util';
import { THEME } from '../../const/themes';
import { SIZE } from '../../const/sizes';

export const TitleBarContainer=styled.div`
    display: flex;
    flex-direction : row;
    align-items : center;
    width : ${SCREEN_WIDTH}+px;
    height : ${TITLE_BAR_HEIGHT};
    background-color : ${(props) => THEME(props.theme).ACCENT};
    padding : ${SIZE.SPACING.SM}
`

