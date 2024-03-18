import '../styles/registerModal.css'
import { useNavigate } from 'react-router-dom'
const RegisterModal:React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div className="register_modal_background">
            <div className="register_modal_main">
                <div className="register_modal_text">
                    <p>Successfully Create an account, click the button below to redirect to login page</p>
                </div>

                <div className="register_modal_redirect">
                    <button onClick={()=>navigate('/')}>Go to login page</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
