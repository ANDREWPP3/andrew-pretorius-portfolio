import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { ScreenHead } from '../../styled/screen-head';
import { LANGUAGE } from '../../../language/language';
import { HorizontalFlexContainer } from '../../styled/horizontal-flex-container';
import { HorizontalFlexColumn } from '../../styled/horizontal-flex-column';
import { ProfileImage } from '../../styled/profile-image';
import { BufferVertical } from '../../styled/buffer-vertical';
import { ContentGroup } from '../../styled/content-group';
import { TypeWriter } from '../../styled/type-writer';

export default function Education({theme,language}){

    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            <ContentContainer theme={theme}>
                <ScreenHead theme={theme}>
                    <TypeWriter>{LANGUAGE(language).education}</TypeWriter>    
                </ScreenHead>
                <ContentGroup theme={theme}>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            <ProfileImage src='./crawford-badge.jpg'/>                           
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            <ProfileImage src='./imm-badge.png'/>                                
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            <ProfileImage src='./vzap-badge.jpg'/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            <ProfileImage src='./oracle-badge.png'/>
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).crawford_college_lonehill}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).imm_grad_school}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).vzap_school}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).oracle}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).crawford_edu}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).imm_edu}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).vzap_edu}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).oracle_edu}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).crawford_desc}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).imm_desc}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).vzap_desc}
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn>
                            {LANGUAGE(language).oracle_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
            </ContentContainer>
        </ScreenContainer>
    
   )
}