import {Paper, Table, TableHead, TableRow, TableContainer, TableCell} from "@mui/material"
const AddClassPage:React.FC = ()=>{

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
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
};

export default AddClassPage;