import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import React, { ReactHTMLElement, useState } from "react";
import '../styles/navigationBar.css'

const NavigationBar:React.FC = ()=>{

    const [openNavBar,setOpenNavBar] = useState<boolean>(false)

    const handleClick = ()=>{
        setOpenNavBar(prev=>!prev)
    }
    
    const currentUrl = window.location.href;
    console.log(currentUrl);

    return(
        <div className="navBar-main">
            <div className="navBar">
                <Link className="navBar-link" to=''>Home</Link>
                <Link className="navBar-link" to=''>Home</Link>
                <Link className="navBar-link" to=''>Home</Link>
                <Link className="navBar-link" to=''>Home</Link>
                <Icon onClick={handleClick} className="navBar-hamburger" icon="ci:hamburger-md" width="2.5rem" height="2.5rem" />
            </div>
            { openNavBar && <div className="navBar-extended">
                <Link className="navBar-extended-link" to=''>Home</Link>
                <Link className="navBar-extended-link" to=''>Home</Link>
                <Link className="navBar-extended-link" to=''>Home</Link>
                <Link className="navBar-extended-link" to=''>Home</Link>
            </div>}
        </div>
        
    )
}

export default NavigationBar