import {Paper, TextField, Table, TableHead, TableRow, TableContainer, TableCell, TableBody} from "@mui/material"
import { ReactEventHandler, ReactHTML, ReactHTMLElement, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface IClass{
    ClassId:string,
    ClassName:string,
    Instructor:string,
    Room:string,
    Credit:number
}


const AddClassPage:React.FC = ()=>{
    const {id} = useParams();
    const endPointUrl = `http://localhost:3000/profile/${id}/addClass`;
    

    useEffect(()=>{
        axios.get(endPointUrl,{withCredentials:true}).
        then(res=>{
            console.log(res.data)
        })
    })
    
    

    const columns = [
        {id:'Class Id',name:'Class Id'},
        {id:'Class Name', name:'Class Name'},
        {id:'Instructor', name:'Instructor'},
        {id:'Room', name:'Room'},
        {id:'Credit', name:'Credit'}
    ]

    
    return(
        <div>
            <h1>
                Class Catalouge
            </h1>

            <Paper >
                <TextField  id="standard-basic" label="Search Class" variant="standard"></TextField>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((item)=>{
                                    return (
                                    <TableCell key={item.id}>
                                        {item.name}
                                    </TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
};

export default AddClassPage;