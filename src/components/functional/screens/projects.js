import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { ScreenHead } from '../../styled/screen-head';
import { LANGUAGE } from '../../../language/language';
import { ContentHead } from '../../styled/content-head';
import { ContentDescription } from '../../styled/content-description';
import { HorizontalFlexContainer } from '../../styled/horizontal-flex-container';
import { HorizontalFlexColumn } from '../../styled/horizontal-flex-column';
import { ScreenShot } from '../../styled/screen-shot';
import { BufferVertical } from '../../styled/buffer-vertical';
import { VerticalFlexContainer } from '../../styled/vertical-flex-container';
import { VerticalFlexRow } from '../../styled/vertical-flex-row';
import { ScreenShotApp } from '../../styled/screen-shot-app';
import BulletPointData from '../util/bullet-point-data';
import { HyperLink } from '../../styled/hyper-link';
import { ContentGroup } from '../../styled/content-group';
import { TypeWriter } from '../../styled/type-writer';

export default function Projects({theme,language}){
    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            <ContentContainer>
                <ScreenHead theme={theme}>
                    <TypeWriter>{LANGUAGE(language).projects}</TypeWriter>    
                </ScreenHead>     
                <ContentGroup theme={theme}>
                    <ContentHead theme={theme}>
                        {LANGUAGE(language).my_portfolio_website}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).my_portfolio_website_desc}
                    </ContentDescription>
                    <ContentDescription>
                        {LANGUAGE(language).my_portfolio_website_code_inclusion} <HyperLink theme={theme} href='https://github.com/ANDREWPP3/andrew-pretorius-portfolio' target='_blank'>https://github.com/ANDREWPP3/andrew-pretorius-portfolio</HyperLink>
                    </ContentDescription>
                </ContentGroup>
                <ContentGroup theme={theme}>
                    <ContentHead theme={theme}>
                        {LANGUAGE(language).payguru_web_app}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).payguru_web_app_desc}
                    </ContentDescription>
                    <BufferVertical>
                        <HorizontalFlexContainer>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShot src="./payguru-login.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1} >
                                {LANGUAGE(language).payguru_login_desc}
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </BufferVertical>
                    <BufferVertical>
                        <HorizontalFlexContainer >
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShot src="./payguru-prod-capture.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                {LANGUAGE(language).payguru_prod_capture_desc}
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </BufferVertical>
                    <BufferVertical>
                        <HorizontalFlexContainer >
                            <HorizontalFlexColumn flex={1}>
                                <VerticalFlexContainer>
                                    <VerticalFlexRow>
                                        <ScreenShot src="./payguru-view-customers-1.png" alt=""/>
                                    </VerticalFlexRow>
                                    <VerticalFlexRow>
                                        <ScreenShot src="./payguru-view-customers-2.png" alt=""/>
                                    </VerticalFlexRow>
                                </VerticalFlexContainer>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                {LANGUAGE(language).payguru_customer_capture_desc}
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </BufferVertical>
                    <BufferVertical>
                        <HorizontalFlexContainer >
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShot src="./payguru-view-policy.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                {LANGUAGE(language).payguru_invoice_search_desc}
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </BufferVertical>
                    <BufferVertical>
                        <HorizontalFlexContainer >
                            <HorizontalFlexColumn flex={1}>
                                <VerticalFlexContainer>
                                    <VerticalFlexRow>
                                        <ScreenShot src="./payguru-policy-graph-1.png" alt=""/>
                                    </VerticalFlexRow>
                                    <VerticalFlexRow>
                                        <ScreenShot src="./payguru-policy-graph-2.png" alt=""/>
                                    </VerticalFlexRow>
                                </VerticalFlexContainer>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1} >
                                {LANGUAGE(language).payguru_sales_gaph_desc}
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </BufferVertical>
                </ContentGroup>
                <ContentGroup theme={theme}>
                    <ContentHead theme={theme}>
                        {LANGUAGE(language).payguru_client_app}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).payguru_client_app_desc}
                        <BufferVertical/>
                        {LANGUAGE(language).payguru_client_app_inc_libs}
                        <br/>
                        <BulletPointData theme={theme} data={[LANGUAGE(language).payguru_client_app_incl_expo,LANGUAGE(language).payguru_client_app_incl_yarn,LANGUAGE(language).payguru_client_app_incl_axios,LANGUAGE(language).payguru_client_app_incl_style_components]}/>
                    </ContentDescription>
                    <BufferVertical/>
                    <HorizontalFlexContainer >
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./app-login.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./app-home.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./app-purchase.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1} >
                            <ScreenShotApp src="./app-renew.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./app-support.png" alt=""/>
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
                <ContentGroup theme={theme}>
                    <ContentHead theme={theme}>
                        {LANGUAGE(language).payguru_event_app}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).payguru_event_app_desc}
                        <BufferVertical/>
                        {LANGUAGE(language).payguru_event_app_desc_1}
                        <BufferVertical/>
                        {LANGUAGE(language).payguru_event_app_desc_2}
                    </ContentDescription>
                    <BufferVertical/>
                    <HorizontalFlexContainer >
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./payguru-event-home.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./payguru-event-products.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./payguru-event-transaction.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1} >
                            <ScreenShotApp src="./payguru-event-checkout.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./payguru-event-recharge.jpg" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShotApp src="./payguru-event-vendors.jpg" alt=""/>
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
                <BufferVertical/>
                <ContentGroup theme={theme}>
                    <ContentHead theme={theme}>
                        {LANGUAGE(language).recargaki_website}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).recargaki_website_desc}
                        <BufferVertical/>
                        <HyperLink theme={theme} href='https://www.recargaki.co.mz' target='_blank'>https://www.recargaki.co.mz</HyperLink>
                    </ContentDescription>
                    <BufferVertical/>
                    <HorizontalFlexContainer >
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./recargaki-web-1.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./recargaki-web-2.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./recargaki-web-3.png" alt=""/>
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
            </ContentContainer>
        </ScreenContainer>
 
    )
}