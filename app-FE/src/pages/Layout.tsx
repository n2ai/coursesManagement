import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
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
        <div>
            <NavigationBar/>
            
            <Outlet>

            </Outlet>
        </div>
    )
}

export default Layout;