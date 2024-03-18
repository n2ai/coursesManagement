import '../styles/registerPage.css'
import { useState } from 'react'
import axios from 'axios'

interface IRegisterPage{
    username:string,
    password:string,
    fullName:string,
    year:string
}

const RegisterPage:React.FC = () =>{

    const[registerForm, setRegisterForm] = useState<IRegisterPage>({
        username:'',
        password:'',
        fullName:'',
        year:''
    })

    const [reenterPassword, setReenterPassword] = useState<string>('')


    const handleUpdate = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
        setRegisterForm((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const handleSubmit = async ()=>{
        await axios.post('http://localhost:3000/register',registerForm)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    

    return(
        <div className="register_page">

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
                    <input onChange={handleUpdate} type='password' name='reEnterPassword' placeholder='Re-enter Password'></input>
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
                    <button>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage