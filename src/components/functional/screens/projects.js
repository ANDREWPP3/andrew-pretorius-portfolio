import React, { useState } from 'react';
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
import { ContentContainerStretch } from '../../styled/content-container-stretch';
import { EnlargedScreenShot } from '../../styled/enlarged-screen-shot';
import { RxCrossCircled } from "react-icons/rx";
import { CloseButton } from '../../styled/close-button';
export default function Projects({theme,language}){

    const [zoomImg,setZoomImg] = useState(null);
    const [zoomImgIsApp,setZoomImgIsApp] = useState(null);

    function configureRender(){
        if(zoomImg){
            return(
                <ContentContainerStretch>
                    <CloseButton size={50} onClick={() => {setZoomImgIsApp(null); setZoomImg(null)}}/>
                    <EnlargedScreenShot theme={theme} src={zoomImg} app={zoomImgIsApp}/>
                </ContentContainerStretch>
            )
        }
        else{
            return (
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
                                    <ScreenShot onClick={() => {setZoomImg("./payguru-login.png")}} src="./payguru-login.png" alt=""/>
                                </HorizontalFlexColumn>
                                <HorizontalFlexColumn flex={1} >
                                    {LANGUAGE(language).payguru_login_desc}
                                </HorizontalFlexColumn>
                            </HorizontalFlexContainer>
                        </BufferVertical>
                        <BufferVertical>
                            <HorizontalFlexContainer >
                                <HorizontalFlexColumn flex={1}>
                                    <ScreenShot onClick={() => {setZoomImg("./payguru-prod-capture.png")}} src="./payguru-prod-capture.png" alt=""/>
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
                                            <ScreenShot  onClick={() => {setZoomImg("./payguru-view-customers-1.png")}} src="./payguru-view-customers-1.png" alt=""/>
                                        </VerticalFlexRow>
                                        <VerticalFlexRow>
                                            <ScreenShot  onClick={() => {setZoomImg("./payguru-view-customers-2.png")}} src="./payguru-view-customers-2.png" alt=""/>
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
                                    <ScreenShot onClick={() => {setZoomImg("./payguru-view-policy.png")}} src="./payguru-view-policy.png" alt=""/>
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
                                            <ScreenShot onClick={() => {setZoomImg("./payguru-policy-graph-1.png")}} src="./payguru-policy-graph-1.png" alt=""/>
                                        </VerticalFlexRow>
                                        <VerticalFlexRow>
                                            <ScreenShot onClick={() => {setZoomImg("./payguru-policy-graph-2.png")}} src="./payguru-policy-graph-2.png" alt=""/>
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
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./app-login.jpg")}} src="./app-login.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("/app-home.png")}} src="./app-home.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./app-purchase.jpg")}} src="./app-purchase.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1} >
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./app-renew.png")}} src="./app-renew.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./app-support.png")}} src="./app-support.png" alt=""/>
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
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-home.jpg")}} src="./payguru-event-home.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-products.jpg")}} src="./payguru-event-products.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-transaction.jpg")}} src="./payguru-event-transaction.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1} >
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-checkout.jpg")}} src="./payguru-event-checkout.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-recharge.jpg")}} src="./payguru-event-recharge.jpg" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShotApp onClick={() => {setZoomImgIsApp(true); setZoomImg("./payguru-event-vendors.jpg")}} src="./payguru-event-vendors.jpg" alt=""/>
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
                                <ScreenShot  onClick={() => {setZoomImg("./recargaki-web-1.png")}} src="./recargaki-web-1.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShot  onClick={() => {setZoomImg("./recargaki-web-2.png")}} src="./recargaki-web-2.png" alt=""/>
                            </HorizontalFlexColumn>
                            <HorizontalFlexColumn flex={1}>
                                <ScreenShot onClick={() => {setZoomImg("./recargaki-web-3.png")}} src="./recargaki-web-3.png" alt=""/>
                            </HorizontalFlexColumn>
                        </HorizontalFlexContainer>
                    </ContentGroup>
                </ContentContainer>
            )
        }
    }


    return(
        <ScreenContainer theme={theme}>
            <SideBar theme={theme} language={language}/>
            {configureRender()}
        </ScreenContainer>
 
    )
}