import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { LANGUAGE } from '../../../language/language';
import { ScreenHead } from '../../styled/screen-head';
import { TextContainer } from '../../styled/text-container';
import { BufferVertical } from '../../styled/buffer-vertical';
import { TypeWriter } from '../../styled/type-writer';
import { TypeWriterMulti } from '../../styled/type-writer-multi';

export default function About({theme,language}){

    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
                <ContentContainer theme={theme}>
                    <ScreenHead className="container" theme={theme}>
                        <TypeWriter>{LANGUAGE(language).about}</TypeWriter>
                    </ScreenHead>
                    <TextContainer theme={theme}>
                        {LANGUAGE(language).about_desc_1}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_2}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_3}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_4}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_5}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_6}
                        <BufferVertical/>
                        {LANGUAGE(language).about_desc_7}
                    </TextContainer>     
                </ContentContainer>
        </ScreenContainer>
    )
}