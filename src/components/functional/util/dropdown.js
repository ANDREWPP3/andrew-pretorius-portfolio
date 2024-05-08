import React, { useEffect, useRef, useState } from 'react';
import '../../../App.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Button } from '../../styled/button';
import { LANGUAGES } from '../../../const/languages';
import { DropdownContainer } from '../../styled/dropdown-container';
import { OptionContainer } from '../../styled/option-container';
import { DropdownButton } from '../../styled/dropdown-button';
import { DropdownOption } from '../../styled/dropdown-option';
// import { SESSIONSTORAGE_LANG } from '../../util/consts';

export default function Dropdown({data,selected,setSelected,theme}){
    //for close on outside click
    const dropdown = useRef(null);

    const [open,setOpen] = useState(false);

    useEffect(() => {
        //for close on outside click
        document.addEventListener('click',closeOpenListBox)
    })

    //for close on outside click
    const closeOpenListBox = (e)=>{
        if(dropdown.current && open && !dropdown.current.contains(e.target)){
          setOpen(false)
        }
    }

    function handleMouseEnter(){
        setOpen(true);
    };
    function handleMouseLeave(){
        setOpen(false);
    };

    function onSelect(selected){
        setSelected(selected);
        setOpen(false);
    }

    function buildPrimaryBox(){
        return(
            <DropdownButton theme={theme} id="btn_drop" ref={dropdown} className='clickable' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
                <div style={{display : "flex"}}>
                    <div style={{flex  : 2}}>
                        {selected.name}
                    </div>
                    <div style={{flex : 1}}>
                        {open ? <FaAngleUp/> : <FaAngleDown/>}
                    </div>
                </div>
            </DropdownButton>
        )
    }
    function buildListBox(){
        let html = [];
        
        for(let i=0;i<data.length;i++){
            let currData = data[i];
            html.push(
                <DropdownOption theme={theme} className={` ${open ? 'show-drop-contents' : ''}`} key={"data_"+i} onClick={()=> onSelect(currData)} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
                    {currData.name}
                </DropdownOption>
            )
        }
        return(
            <OptionContainer theme={theme}>
                {html}
             </OptionContainer>
        )
    }


    return(
        <DropdownContainer theme={theme}>
            {buildPrimaryBox()}
            {buildListBox()}
        </DropdownContainer>
    )
}