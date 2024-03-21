import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
const HomePage:React.FC = ()=>{

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
        <>
            <header>

            </header>

            <main>
                <p>This is homepage</p>
                <Outlet>

                </Outlet>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default HomePage