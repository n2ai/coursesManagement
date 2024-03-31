import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
const HomePage:React.FC = ()=>{
    //Get data based on params id
    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${params.id}`,{withCredentials:true})
        .then((res)=>{
            console.log(res)
        })
        .catch((err:Error)=>{
            navigate('/')
        })
    },[])

    return(
        <div>
            This is homepage
        </div>
    )
};

export default  HomePage;