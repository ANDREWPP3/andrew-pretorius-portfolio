import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { LANGUAGE } from '../../../language/language';
import { ScreenHead } from '../../styled/screen-head';
import { TextContainer } from '../../styled/text-container';
import { BufferVertical } from '../../styled/buffer-vertical';

export default function About({theme,language}){

    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
                <ContentContainer>
                    <ScreenHead>
                        {LANGUAGE(language).about}    
                    </ScreenHead>
                    <TextContainer>
                        {LANGUAGE(language).aboutdesc1}
                        <BufferVertical/>
                        {LANGUAGE(language).aboutdesc2}
                        <BufferVertical/>
                        {LANGUAGE(language).aboutdesc3}
                        <BufferVertical/>
                        {LANGUAGE(language).aboutdesc4}
                        <BufferVertical/>
                        {LANGUAGE(language).aboutdesc5}
                        <BufferVertical/>
                        {LANGUAGE(language).aboutdesc6}
                    </TextContainer>     
                </ContentContainer>

        </ScreenContainer>
    )
}