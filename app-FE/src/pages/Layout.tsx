import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import '../styles/layoutPage.css'
const Layout:React.FC = ()=>{

    const [searchParams,setSearchParams] = useSearchParams();
    const id = searchParams.get('id')

    useEffect(()=>{
        axios.post('http://localhost:3000/profile',{id:id},{withCredentials:true})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div className="layout-main">
            <div className="layout-navBar">
                <NavigationBar/>
            </div>

            <div className="layout-contents">
                This is content
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;