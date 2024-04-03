import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

interface IEnrollments{
    EnrollmentId:number,
    UserId:number,
    ClassId:string,
    ClassCondition:string,
    EnrollmentDate:string
}

const HomePage:React.FC = ()=>{
    //Get data based on params id
    const params = useParams()
    // const navigate = useNavigate()

    const [userEnrollments, setUserEnrollments] = useState<IEnrollments[]>([{
        EnrollmentId:0,
        UserId:0,
        ClassId:'',
        ClassCondition:'',
        EnrollmentDate:''
    }])

    const [haveClass, setHaveClass] = useState<boolean>(false);

    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${params.id}`,{withCredentials:true})
        .then((res:AxiosResponse)=>{
            setUserEnrollments(res.data);
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
        <tr>
            <td>{item.EnrollmentId}</td>
            <td>{item.UserId}</td>
            <td>{item.ClassId}</td>
            <td>{item.ClassCondition}</td>
            <td>{item.EnrollmentDate}</td>
        </tr>
    })

    return(
        <div>
            <div>
                {/**Title Session */}
            </div>

            <div>
                {/**Table Session */}
                <table id="enrollments">
                    <tr>
                        <th>Enrollment ID</th>
                        <th>User ID</th>
                        <th>Class ID</th>
                        <th>Class Condition</th>
                        <th>Enrollment Date</th>
                    </tr>


                </table>
            </div>
        </div>
    )
};

export default  HomePage;