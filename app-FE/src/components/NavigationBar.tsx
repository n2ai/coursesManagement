import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import React, { ReactHTMLElement, useState } from "react";
import '../styles/navigationBar.css'

const NavigationBar:React.FC = ()=>{

    const [openNavBar,setOpenNavBar] = useState<boolean>(false)

    const handleClick = ()=>{
        setOpenNavBar(prev=>!prev)
    }

    //URL modification function split,add / to 1st elment, and join with the new link
    
    
    const currentUrl = window.location.href;
    const urlArray = currentUrl.split('/');
    const generateUrl = (item:string):string=>{
        return `${urlArray[0]}//${urlArray[2]}/${urlArray[3]}/${item}/${urlArray[4]}`;
    }

    const homeUrl = generateUrl('');
    const addClassUrl = generateUrl('addClass');
    

    return(
        <div className="navBar-main">
            <div className="navBar">
                <div className="navBar-media">

                </div>
                <Link className="navBar-link" to={'/'}>Home</Link>
                <Link className="navBar-link" to={addClassUrl}>Add Class</Link>
                <Icon onClick={handleClick} className="navBar-hamburger" icon="ci:hamburger-md" width="2.5rem" height="2.5rem" />
            </div>
            { openNavBar && <div className="navBar-extended">
                <Link className="navBar-extended-link" to=''>Home</Link>
                <Link className="navBar-extended-link" to=''>Home</Link>
                
            </div>}
        </div>
        
    )
}

export default NavigationBar