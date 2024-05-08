import React from 'react';
import { ScreenContainer } from '../../styled/screen-container';
import { TitleBarContainer } from '../../styled/title-bar-container';
import Dropdown from '../util/dropdown';
import { TitleBarContent } from '../../styled/title-bar-content';
import { SCREENS } from '../../../const/screens';
import NavigationDropdown from '../navigation/navigation-dropdown';
import { SideBarContainer } from '../../styled/side-bar-container';
import SideBar from '../navigation/side-bar';
import { ContentContainer } from '../../styled/content-container.';
import { ScreenHead } from '../../styled/screen-head';
import { LANGUAGE } from '../../../language/language';
import { ContentGroup } from '../../styled/content-group';
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

export default function Projects({theme,language}){
    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            <ContentContainer>
                <ScreenHead>
                    {LANGUAGE(language).projects}    
                </ScreenHead>     
                <ContentGroup>
                    <ContentHead>
                        {LANGUAGE(language).my_portfolio_website}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).my_portfolio_website_desc}
                    </ContentDescription>
                    <BufferVertical/>
                    <ContentDescription>
                        <HyperLink>
                            {LANGUAGE(language).my_portfolio_website_code_inclusion}
                        </HyperLink>
                    </ContentDescription>
                </ContentGroup>
                <ContentGroup>
                    <ContentHead>
                        {LANGUAGE(language).payguru_web_app}
                    </ContentHead>
                    <ContentDescription>
                        {LANGUAGE(language).payguru_web_app_desc}
                    </ContentDescription>
                    <BufferVertical/>
                    <HorizontalFlexContainer>
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./payguru-login.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1} alignstart="align-start">
                            {LANGUAGE(language).payguru_login_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer >
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./payguru-prod-capture.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1} alignstart="align-start">
                            {LANGUAGE(language).payguru_prod_capture_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
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
                        <HorizontalFlexColumn flex={1} alignstart="align-start">
                            {LANGUAGE(language).payguru_customer_capture_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
                    <HorizontalFlexContainer >
                        <HorizontalFlexColumn flex={1}>
                            <ScreenShot src="./payguru-view-policy.png" alt=""/>
                        </HorizontalFlexColumn>
                        <HorizontalFlexColumn flex={1} alignstart="align-start">
                            {LANGUAGE(language).payguru_invoice_search_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                    <BufferVertical/>
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
                        <HorizontalFlexColumn flex={1} alignstart="align-start">
                            {LANGUAGE(language).payguru_sales_gaph_desc}
                        </HorizontalFlexColumn>
                    </HorizontalFlexContainer>
                </ContentGroup>
                <ContentGroup>
                    <ContentHead>
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
                <ContentGroup>
                    <ContentHead>
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
            </ContentContainer>
        </ScreenContainer>
 
    )
}