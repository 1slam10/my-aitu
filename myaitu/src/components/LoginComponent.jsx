import { useState } from 'react';
import { LoginAPI } from '../api/AuthAPI';
import AituLogo from '../assets/AituLogo.png';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import '../Sass/LoginComponent.scss';

export default function LoginComponent() {

    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();

    const validateEmail = () => {
        if (!credentials.email || !credentials.password) {
            toast.error("Please fill in all fields");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@astanait\.edu\.kz$/;

        if (!emailPattern.test(credentials.email)) {
            toast.error("Invalid email format");
            return false;
        }

        return true;
    }

    const validatePassword = () => {
        if (credentials.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }

        return true;
    }

    const validateInput = () => {
        return validatePassword() && validateEmail();
    }

    const login = async () => {
        if (!validateInput()) return;

        let result;

        try {
            result = await LoginAPI(credentials.email, credentials.password);
            toast.success("Signed in successfully!");

            navigate('/home')
        } catch (error) {
            console.log(error);
            toast.error("Please check your credentials")
        }

        console.log(result);
    }

    return (
        <div className='login-wrapper'>
            <img src={AituLogo} alt='Aitu Logo' className='aitu-logo'/>

            <div className='login-wrapper-inner'>
                <h1 className='heading'>Sign in</h1>
                <p className='subheading'>All Things Uni, All in One Place</p>

                <div className='auth-inputs'>
                    <input
                        onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                        type='email'
                        className='common-input'
                        placeholder='Email'
                    />

                    <input
                        onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                        type='password'
                        className='common-input'
                        placeholder='Password'
                    />
                </div>
                <button onClick={login} className='login-btn'>Sign in to MyAITU</button>
            </div>
        </div>
    )
}