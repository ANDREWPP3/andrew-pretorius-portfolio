import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { ExpandButtonContainer } from '../../styled/expand-button-container';
import { THEME } from '../../../const/themes';

export default function ExpandButton({expanded, setExpanded, theme}){
    function onHandleOpen(){
        setExpanded(true);
    }
    function onHandleClose(){
        setExpanded(false);
    }

    return(
        <ExpandButtonContainer id="expand-btn"  onMouseEnter={onHandleOpen} expanded={expanded}>
            {expanded ? <FaChevronCircleLeft size={40} color={THEME(theme).ACCENT_TRANSPARENT}/> : <FaChevronCircleRight size={40} color={THEME(theme).ACCENT_TRANSPARENT}/>}
        </ExpandButtonContainer>
    )
}