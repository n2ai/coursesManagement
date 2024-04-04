import {Paper, TextField, Table, TableHead, TableRow, TableContainer, TableCell, TableBody} from "@mui/material"
import { ReactEventHandler, ReactHTML, ReactHTMLElement, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IClass{
    ClassId:string,
    ClassName:string,
    Instructor:string,
    Room:string,
    Credit:number
}


const AddClassPage:React.FC = ()=>{

    const [searchParams,setSearchParams] = useSearchParams();

    const searchHandler = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        let search;
        if((event.target as HTMLInputElement).value){
            search = {keyword:(event.target as HTMLInputElement).value};
        }else{
            search = undefined;
        }

        setSearchParams(search,{replace:true});
    }   

    const columns = [
        {id:'Class Id',name:'Class Id'},
        {id:'Class Name', name:'Class Name'},
        {id:'Instructor', name:'Instructor'},
        {id:'Room', name:'Room'},
        {id:'Credit', name:'Credit'}
    ]

    const [classes,setClasses] = useState<IClass[]>();

    console.log(searchParams.get('keyword'))

    return(
        <div>
            <h1>
                Class Catalouge
            </h1>

            <Paper >
                <TextField onChange={searchHandler} id="standard-basic" label="Search Class" variant="standard"></TextField>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((item)=>{
                                    return (
                                    <TableCell id={item.id}>
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