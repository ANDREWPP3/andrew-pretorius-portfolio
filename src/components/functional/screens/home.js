import React, { useState } from 'react';
import "../../../App.css";
import { ScreenContainer } from '../../styled/screen-container';
import { ContentContainerStretch } from '../../styled/content-container-stretch';
import { ProfileImage } from '../../styled/profile-image';
import { Header } from '../../styled/header';
import { LANGUAGE } from '../../../language/language';
import { ImageContainer } from '../../styled/image-container';
import { SubHeader } from '../../styled/sub-header';
import { BufferVertical } from '../../styled/buffer-vertical';
import { Button } from '../../styled/button';
import Dropdown from '../util/dropdown';
import { LANGUAGES } from '../../../const/languages';
import { TitleBarContainer } from '../../styled/title-bar-container';
import { ButtonContainer } from '../../styled/button-container';
import { THEMES } from '../../../const/themes';
import { TitleBarContent } from '../../styled/title-bar-content';
import Link from '../navigation/link';


export default function Introduction({theme,setTheme,language,setLanguage}){
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter(){
        setIsHovered(true);
    };
    function handleMouseLeave(){
        setIsHovered(false);
    };
    function configureRender(){
        return(
            <ScreenContainer theme={theme}>
                <TitleBarContainer theme={theme}>
                    <TitleBarContent>
                        <Dropdown theme={theme} data={LANGUAGES} selected={language} setSelected={setLanguage}/>
                    </TitleBarContent>
                    <TitleBarContent flexend="flex-end">
                        <Dropdown theme={theme} data={THEMES(language)} selected={theme} setSelected={setTheme} language={language}/>
                    </TitleBarContent>
                </TitleBarContainer>
                <ContentContainerStretch theme={theme}>
                    <BufferVertical>
                        <Header theme={theme}>
                            {LANGUAGE(language).andrews_portfolio}
                        </Header>
                        <SubHeader theme={theme}>
                            {LANGUAGE(language).full_stack_developer_software_engineer}
                        </SubHeader>
                    </BufferVertical>
                    <ImageContainer>
                        <ProfileImage src="./me.jpeg" alt=""/>
                    </ImageContainer>
                    <BufferVertical>
                        <Button theme={theme} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {LANGUAGE(language).navigate}
                        </Button>
                        <ButtonContainer className={`${isHovered ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Link href={"/about"}><Button theme={theme}>{LANGUAGE(language).about}</Button></Link>
                            <Button theme={theme}>{LANGUAGE(language).education}</Button>
                            <Button theme={theme}>{LANGUAGE(language).experience}</Button>
                            <Button theme={theme}>{LANGUAGE(language).skills}</Button>
                            <Link href={"/projects"}><Button theme={theme}>{LANGUAGE(language).projects}</Button></Link>
                        </ButtonContainer>
                    </BufferVertical>
                </ContentContainerStretch>
            </ScreenContainer>
        )
    }
    return(
        configureRender()
    )
}