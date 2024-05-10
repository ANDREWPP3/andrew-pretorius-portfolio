import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { ScreenHead } from '../../styled/screen-head';
import { LANGUAGE } from '../../../language/language';
import { TypeWriter } from '../../styled/type-writer';
import { HorizontalFlexContainer } from '../../styled/horizontal-flex-container';
import { ContentContainerStretch } from '../../styled/content-container-stretch';
import { HorizontalFlexColumn } from '../../styled/horizontal-flex-column';
import { ArrowImage } from '../../styled/arrow-image';
import { PRIMARY, THEME, THEME_PRIMARY, THEME_SECONDARY } from '../../../const/themes';
import { VerticalFlexContainer } from '../../styled/vertical-flex-container';
import { VerticalFlexRow } from '../../styled/vertical-flex-row';
import { BufferVertical } from '../../styled/buffer-vertical';
import { ContentHead } from '../../styled/content-head';
import { ContentGroup } from '../../styled/content-group';
import { ProfileImage } from '../../styled/profile-image';
import { LogoImage } from '../../styled/logo-image';

export default function Experience({theme,language}){

    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            <ContentContainer>
                <ScreenHead theme={theme}>
                    <TypeWriter>{LANGUAGE(language).experience}</TypeWriter>
                </ScreenHead>
                <ContentGroup theme={theme}>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            <LogoImage src='./recargaki-logo.jpg'/>                           
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            <LogoImage src='./payguru-logo.png'/>                                
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).recargaki}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).payguru}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).recargaki_desc}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).payguru_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            (2020 - 2021) {LANGUAGE(language).recargaki_position}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            (2022 - present) {LANGUAGE(language).payguru_position}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
            </ContentContainer>
        </ScreenContainer>
    )
}