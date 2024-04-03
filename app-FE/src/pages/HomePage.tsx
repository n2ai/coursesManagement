import { useState, useEffect, ReactElement } from "react";
import axios, { AxiosResponse } from "axios";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import '../styles/homePage.css';

interface IEnrollments{
    ClassName:string,
    ClassId:string,
    ClassCondition:string,
    EnrollmentDate:string
}

const HomePage:React.FC = ()=>{
    //Get data based on params id
    const params = useParams()
    // const navigate = useNavigate()

    //Convert date function:
    const convertDate = (timestamp:string):string=>{
        const date:Date = new Date(timestamp);

        const year: number = date.getFullYear();

        const month: string = ('0' + (date.getMonth() + 1)).slice(-2);

        const day: string = ('0' + date.getDate()).slice(-2);

        const formattedDate: string = `${month}-${day}-${year}`;

        return formattedDate
    }

    const [userEnrollments, setUserEnrollments] = useState<IEnrollments[]>([{
        ClassName:'',
        ClassId:'',
        ClassCondition:'',
        EnrollmentDate:''
    }])

    const [haveClass, setHaveClass] = useState<boolean>(false);

    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${params.id}`,{withCredentials:true})
        .then((res:AxiosResponse)=>{
            setUserEnrollments(res.data);
            console.log(res.data);
            if(res.data.length === 0){
                setHaveClass(false);
            }else{
                setHaveClass(true);
            }
        })
        .catch(()=>{
            // navigate('/')
        });
    },[params.id]);

    const tableData = userEnrollments.map((item:IEnrollments)=>{
        return (<tr key={item.ClassId}>
            
            <td>{item.ClassName}</td>
            <td>{item.ClassId}</td>
            <td>{item.ClassCondition}</td>
            <td>{convertDate(item.EnrollmentDate)}</td>
        </tr>)
    })

    return(
        <div>
            <div>
                {/**Title Session */}
                <h1>My Class</h1>
                <div>
                    Search bar section
                </div>
            </div>

            <div>
                {/**Table Session */}
                <table id="enrollments">
                    <tr>
                        <th>Class Name</th>
                        <th>Class ID</th>
                        <th>Class Condition</th>
                        <th>Enrollment Date</th>
                    </tr>
                    {tableData}
                </table>
            </div>
        </div>
    )
};

export default  HomePage;