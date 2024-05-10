import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { ScreenHead } from '../../styled/screen-head';
import { LANGUAGE } from '../../../language/language';
import { HorizontalFlexContainer } from '../../styled/horizontal-flex-container';
import { HorizontalFlexColumn } from '../../styled/horizontal-flex-column';
import { ContentHead } from '../../styled/content-head';
import { BufferVertical } from '../../styled/buffer-vertical';
import BulletPointData from '../util/bullet-point-data';
import { VerticalFlexContainer } from '../../styled/vertical-flex-container';
import { VerticalFlexRow } from '../../styled/vertical-flex-row';
import { ContentGroup } from '../../styled/content-group';
import { TypeWriter } from '../../styled/type-writer';

export default function Skills({theme, language}){

   return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            <ContentContainer theme={theme}>
                <ScreenHead theme={theme}>
                    <TypeWriter>{LANGUAGE(language).skills}</TypeWriter>    
                </ScreenHead>
                <ContentGroup theme={theme}>
                <HorizontalFlexContainer>
                    <HorizontalFlexColumn flex={20}>
                        <VerticalFlexContainer>
                            <VerticalFlexRow>
                                <ContentHead theme={theme}>
                                    {LANGUAGE(language).personal_skills}
                                </ContentHead>
                            </VerticalFlexRow>
                            <BufferVertical/>
                            <VerticalFlexRow>
                                <BulletPointData aligndata="left" theme={theme} data={[LANGUAGE(language).skill_communication,LANGUAGE(language).skill_teamwork,LANGUAGE(language).skill_problem_solving,LANGUAGE(language).skill_adaptability,LANGUAGE(language).skill_leadership,LANGUAGE(language).skill_creativity,LANGUAGE(language).skill_emotional_intelligence,LANGUAGE(language).skill_resilience,LANGUAGE(language).skill_technical_proficiency,LANGUAGE(language).skill_organisation]}/>
                            </VerticalFlexRow>
                        </VerticalFlexContainer>
                    </HorizontalFlexColumn>
                    <HorizontalFlexColumn flex={1}></HorizontalFlexColumn>
                    <HorizontalFlexColumn flex={20}>
                        <VerticalFlexContainer>
                            <VerticalFlexRow>
                                <ContentHead theme={theme}>
                                   {LANGUAGE(language).development_skills}
                                </ContentHead>
                                </VerticalFlexRow>
                                <BufferVertical/>
                                <VerticalFlexRow>
                                    <BulletPointData aligndata="left" theme={theme} data={[LANGUAGE(language).skill_java,LANGUAGE(language).skill_node_js,LANGUAGE(language).skill_html,LANGUAGE(language).skill_javascript,LANGUAGE(language).skill_css,LANGUAGE(language).skill_sql,LANGUAGE(language).skill_linux,LANGUAGE(language).skill_react_js,LANGUAGE(language).skill_react_native,LANGUAGE(language).skill_android_studio,LANGUAGE(language).skill_database_replication]}/>
                            </VerticalFlexRow>
                        </VerticalFlexContainer>
                    </HorizontalFlexColumn>
                </HorizontalFlexContainer>
                </ContentGroup>
            </ContentContainer>
        </ScreenContainer>
    
   )
}