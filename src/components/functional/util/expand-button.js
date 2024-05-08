import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { ExpandButtonContainer } from '../../styled/expand-button-container';
import { THEME } from '../../../const/themes';

export default function ExpandButton({expanded, setExpanded, theme}){
    function onHandleOpen(){
        setExpanded(!expanded);
    }
    return(
        <ExpandButtonContainer id="expand-btn" onClick={onHandleOpen} expanded={expanded}>
            {expanded ? <FaChevronCircleLeft size={30} color={THEME(theme).ACCENT_TRANSPARENT}/> : <FaChevronCircleRight size={30} color={THEME(theme).ACCENT_TRANSPARENT}/>}
        </ExpandButtonContainer>
    )
}