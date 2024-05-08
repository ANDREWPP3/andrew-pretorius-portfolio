import React, { useState } from 'react';
import { SideBarContainer } from '../../styled/side-bar-container';
import ExpandButton from '../util/expand-button';
import { SIDE_BAR_WIDTH } from '../../../util/screen-util';
import { LANGUAGE } from '../../../language/language';
import Link from './link';
import { SideBarOptionContainer } from '../../styled/side-bar-option-container';


export default function SideBar({theme,language}){
    const [expanded,setExpanded] = useState(false);

    return(
        <>
            <SideBarContainer id="sidebarcontainer" expanded={expanded} theme={theme}>
                <SideBarOptionContainer>
                    <Link href="/">{LANGUAGE(language).home}</Link>
                </SideBarOptionContainer>
                <SideBarOptionContainer>
                    <Link href="/about">{LANGUAGE(language).about}</Link>
                </SideBarOptionContainer>
                <SideBarOptionContainer>
                    <Link href="/education">{LANGUAGE(language).education}</Link>
                </SideBarOptionContainer>
                <SideBarOptionContainer>
                    <Link href="/experience">{LANGUAGE(language).experience}</Link>
                </SideBarOptionContainer>
                <SideBarOptionContainer>
                    <Link href="/skills">{LANGUAGE(language).skills}</Link>
                </SideBarOptionContainer>
                <SideBarOptionContainer>
                    <Link href="/projects">{LANGUAGE(language).projects}</Link>
                </SideBarOptionContainer>
            </SideBarContainer>
            <ExpandButton expanded={expanded} setExpanded={setExpanded} theme={theme}/>
        </>
    )


}