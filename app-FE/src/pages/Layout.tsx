import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import '../styles/layoutPage.css'
const Layout:React.FC = ()=>{

    return(
        <div className="layout-main">
            <div className="layout-navBar">
                <NavigationBar/>
            </div>

            <div className="layout-contents">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;