import React from 'react';
export default function Link({href, children}){
    function reroute(event){
        console.log('here')
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        
        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
        <p onClick={reroute}>
            {children}
        </p>
    )
} 