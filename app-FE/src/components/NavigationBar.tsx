import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import React, { ReactHTMLElement, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/navigationBar.css'

const NavigationBar:React.FC = ()=>{
    
    const [openNavBar,setOpenNavBar] = useState<boolean>(false)
    const {id} = useParams()
    const handleClick = ()=>{
        setOpenNavBar(prev=>!prev)
    }    

    return(
        <div className="navBar-main">
            <div className="navBar">
                <div className="navBar-media">
    
                </div>
                <Link className="navBar-link" to={`/profile/${id}`}>Home</Link>
                <Link className="navBar-link" to={`/profile/${id}/addClass`}>Add Class</Link>
                <Icon onClick={handleClick} className="navBar-hamburger" icon="ci:hamburger-md" width="2.5rem" height="2.5rem" />

            </div>
            { openNavBar && <div className="navBar-extended">
                <Link className="navBar-extended-link" to={`/profile/${id}}`}>Home</Link>
                <Link className="navBar-extended-link" to={`/profile/${id}/addClass`}>Add Class</Link>
                
            </div>}
        </div>
    )
}

export default NavigationBar