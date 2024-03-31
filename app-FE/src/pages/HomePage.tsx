import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useSearchParams } from "react-router-dom";
const HomePage:React.FC = ()=>{

    const [searchParams,setSearchParams] = useSearchParams()
    const userId = searchParams.get('id')

    //Get data based on userId
    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then((res)=>{
            console.log(res)
        })
        .catch((err:Error)=>{
            console.log(err)
        })
    },[userId])

    return(
        <div>
            This is homepage
        </div>
    )
};

export default  HomePage;