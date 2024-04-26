import {Paper, TextField, Table, TableHead, TableRow, TableContainer, TableCell, TableBody, TablePagination, TableFooter} from "@mui/material"
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
    
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const {id} = useParams();
    const endPointUrl = `http://localhost:3000/profile/${id}/addClass`;
    const [initialCatalouge,setInitialCatalouge] = useState<IClass[]>([{
        ClassId:'',
        ClassName:'',
        Instructor:'',
        Room:'',
        Credit:0
    }])

    const [catalogue,setCatalouge] = useState<IClass[]>([{
        ClassId:'',
        ClassName:'',
        Instructor:'',
        Room:'',
        Credit:0
    }])


    //Get data from the backend
    useEffect(()=>{
        axios.get(endPointUrl,{withCredentials:true}).
        then(res=>{
            setInitialCatalouge(res.data)
            setCatalouge(res.data)
        })
    },[endPointUrl])
    
    //Specify columns for table
    const columns = [
        {id:'Class Id',name:'Class Id'},
        {id:'Class Name', name:'Class Name'},
        {id:'Instructor', name:'Instructor'},
        {id:'Room', name:'Room'},
        {id:'Credit', name:'Credit'}
    ]

    //Handle Searchbar Filter 
    const handleFilter = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;        
        setCatalouge(initialCatalouge.filter((item)=>{
            if(item.ClassId.includes(value) || item.ClassName.includes(value) || 
            item.Instructor.includes(value) || item.Room.includes(value)) return true
        }))
        console.log(catalogue);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - catalogue.length) : 0;

    
    return(
        <div>
            <h1>
                Class Catalouge
            </h1>

            <Paper >
                {/**Search Bar*/}
                <TextField onChange={handleFilter}  id="standard-basic" label="Search Class" variant="standard">
                </TextField>

                {/**Main Table */}
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
                            {(rowsPerPage > 0
                                ? catalogue.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : catalogue
                                ).map((item, index)=>{
                                return (<TableRow key={index}>
                                    <TableCell>{item.ClassId}</TableCell>
                                    <TableCell>{item.ClassName}</TableCell>
                                    <TableCell>{item.Instructor}</TableCell>
                                    <TableCell>{item.Room}</TableCell>
                                    <TableCell>{item.Credit}</TableCell>
                                </TableRow>)
                            })}
                        </TableBody>
                        <TableFooter>
                            <TablePagination
                                component="div"
                                count={100}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableFooter>
                    </Table>
                </TableContainer>
                
            </Paper>
        </div>
    )
};

export default AddClassPage;