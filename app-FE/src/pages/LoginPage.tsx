import '../styles/loginPage.css'
import { ReactHTMLElement, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useCookies} from 'react-cookie'

interface ILoginForm{
    username:string,
    password:string
}

const LoginPage:React.FC = ()=>{
    const [cookies, setCookie] = useCookies(['token'])
    const navigate = useNavigate()

    const [loginForm,setLoginForm] = useState<ILoginForm>({
        username:'',
        password:''
    })
    
    const updateForm = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setLoginForm(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const handleSubmit = async ()=>{
        await axios.post('http://localhost:3000',loginForm)
        .then((response)=>{
            const {accessToken,id} = response.data
            setCookie('token',accessToken)
            navigate(`/profile/?id=${id}`)
        })
        .catch((err:Error)=>{
            console.log(err)
        })
    }

    return(
        <div className="login_page">

            <div className='login_form'>

                <div className="login_header">
                    <h1>Login</h1>
                </div>

                <div className="login_username">
                    <input onChange={updateForm} type='text'name='username' placeholder='Enter Username'></input>
                </div>

                <div className="login_password">
                    <input onChange={updateForm} type='password' name='password' placeholder='Enter Password'></input>
                </div>

                <div className="login_submit">
                    <button onClick={handleSubmit}>Continue</button>
                </div>

                <div className="login_register">
                    <Link to={'/register'} >Do not have an account?</Link>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;