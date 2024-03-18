import '../styles/registerPage.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import RegisterModal from '../components/RegisterModal'

interface IRegisterPage{
    username:string,
    password:string,
    fullName:string,
    year:string
}

const RegisterPage:React.FC = () =>{

    const [modal,setModal] = useState<boolean>(false)

    const[registerForm, setRegisterForm] = useState<IRegisterPage>({
        username:'',
        password:'',
        fullName:'',
        year:''
    });

    const [reenterPassword, setReenterPassword] = useState<string>('');


    const handleUpdate = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        setRegisterForm((prev)=>{
            return {...prev,[e.target.name]:e.target.value};
        })
    }

    const passwordVerification = ():boolean=>{
        if(!(reenterPassword === registerForm.password)){
            alert('Please re-enter password');
            return false;
        }else{
            return true;
        }
    }

    const formVerification = ():boolean=>{
        for(const [key,value] of Object.entries(registerForm)){
            if(value === ''){
                switch(key){
                    case 'username':
                        alert('Please enter your username');
                        return false;
                        break;
                    case 'password':
                        alert('Please enter your password');
                        return false;
                        break;
                    case 'fullName':
                        alert('Please enter you full name');
                        return false;
                        break;
                    case 'year':
                        alert('Please enter your current school year');
                        return false;
                        break;
                }
            }
        }

        return true
    }

    console.log(modal)

    const handleSubmit = ()=>{
        if(passwordVerification() && formVerification()){
            axios.post('http://localhost:3000/register',registerForm)
            .then((res)=>{
                console.log(res)
                setModal(true)
            })
            
            .catch((err)=>{
                alert('There already a user, please change your username')
            })
        }
    }

    
    

    return(
        <div className="register_page">
            {modal && <RegisterModal/>}
            <div className='register_form'>

                <div className="register_header">
                    <h1>Register</h1>
                </div>

                <div className="register_username">
                    <input onChange={handleUpdate} type='text'name='username' placeholder='Enter Username'></input>
                </div>

                <div className="register_password">
                    <input onChange={handleUpdate} type='password' name='password' placeholder='Enter Password'></input>
                </div>

                <div className="register_reenter_password">
                    <input onChange={(e)=>setReenterPassword(e.target.value)} type='password' name='reEnterPassword' placeholder='Re-enter Password'></input>
                </div>

                <div className="register_fullName">
                    <input onChange={handleUpdate} type='text' name="fullName" placeholder='Enter Fullname'></input>
                </div>

                <div className="register_year">
                    <select onChange={handleUpdate} name="year">
                        <option value="">--Select Year--</option>
                        <option value="Freshman" >Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>

                <div className="register_submit">
                    <button onClick={handleSubmit}>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage