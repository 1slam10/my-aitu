import React, { useState } from 'react';
import { LoginAPI } from '../api/AuthAPI';
import AituLogo from '../assets/AituLogo.png';
import '../Sass/LoginComponent.scss'

export default function LoginComponent() {

    const [credentials, setCredentials] = useState({});

    const login = async () => {
        let res = await LoginAPI(credentials.email, credentials.password);
        console.log(credentials.email, credentials.password)
        
        console.log(res?.user);
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