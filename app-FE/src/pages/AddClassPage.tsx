import {Paper, TextField, Table, TableHead, TableRow, TableContainer, TableCell, TableBody, TablePagination} from "@mui/material"
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
    const [rows, rowChange] = useState([]);
    const [page, pageChange] = useState(0);
    const [rowPerPage, rowPerPageChange] = useState(5);

    const handleChangePage = (event,newPage)=>{
        pageChange(newPage)
    }

    const handleRowsPerPage = (event)=>{
        rowPerPageChange(+event.target.value);
        pageChange(0);
    }

    const {id} = useParams();
    const endPointUrl = `http://localhost:3000/profile/${id}/addClass`;
    const [initialCatalouge,setInitialCatalouge] = useState<IClass[]>([{
        ClassId:'',
        ClassName:'',
        Instructor:'',
        Room:'',
        Credit:0
    }])

    const catalogue = initialCatalouge;

    useEffect(()=>{
        axios.get(endPointUrl,{withCredentials:true}).
        then(res=>{
            //test to see data
            console.log(res.data)
            setInitialCatalouge(res.data)
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
                    <Table stickyHeader>
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
                            {catalogue && catalogue.map((item, index)=>{
                                return (<TableRow key={index}>
                                    <TableCell>{item.ClassId}</TableCell>
                                    <TableCell>{item.ClassName}</TableCell>
                                    <TableCell>{item.Instructor}</TableCell>
                                    <TableCell>{item.Room}</TableCell>
                                    <TableCell>{item.Credit}</TableCell>
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination 
                rowsPerPageOptions={[5,10,25]}
                page={page}
                rowsPerPage={rowPerPage}
                component="div"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleRowsPerPage}
                >

                </TablePagination>
            </Paper>
        </div>
    )
};

export default AddClassPage;