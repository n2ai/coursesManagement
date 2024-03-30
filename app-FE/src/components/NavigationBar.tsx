import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import React, { ReactHTMLElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../styles/navigationBar.css'

const NavigationBar:React.FC = ()=>{
    
    const [openNavBar,setOpenNavBar] = useState<boolean>(false)

    const handleClick = ()=>{
        setOpenNavBar(prev=>!prev)
    }

    const [searchParams, setSearchParams] = useSearchParams()
    
    const rawUrl = window.location.href.split('?')[0];
    const homeUrl = rawUrl+`?id=${searchParams.get('id')}`
    const addClassUrl = rawUrl
    
    

    return(
        <div className="navBar-main">
            <div className="navBar">
                <div className="navBar-media">

                </div>
                <Link className="navBar-link" to={homeUrl}>Home</Link>
                <Link className="navBar-link" to={'/'}>Add Class</Link>
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