import React from 'react';
import styled from 'styled-components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../util/screen-util';
import { SIZE } from '../../const/sizes';

export const ContentContainer = styled.div`
    width : ${SCREEN_WIDTH}px;
    height : ${SCREEN_HEIGHT}px;
    overflow-y : auto;
    padding : ${SIZE.SPACING.LG};
`