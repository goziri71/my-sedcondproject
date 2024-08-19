import React, { useState, useEffect, useContext } from 'react';
import '../css/style.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Store from './Store';
import useLogin from '../hooks/useLogin';
import ContextProvider from '../context/AuthContext';
import { AuthContext } from '../context/AuthContext';




function Loggg() {
    const [emailLog, setemailLog] = useState('');
    const [passLog, setpassLog] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const {login} = useLogin()
    // const {user} = useContext(AuthContext)
    

    const handleEmailLog = (e) => {
        setemailLog(e.target.value);
    }

    const handlePasswordLog = (e) => {
        setpassLog(e.target.value);
    }

    


    const handleLogin2 = async (email, password) => {
      const response =  await login(email, password);
      console.log(response);
    }
    
    // console.log("context-user: " + user)
    return (
        // <ContextProvider>
        <div className='createAccountlogin' >

            <div className='loging'>
                <h2>Log in 😊</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin2(emailLog, passLog)
                    }}>
                    <label>Email address</label>
                     <input 
                        onChange={ handleEmailLog }
                        type='email'
                        placeholder='Enter your email address'
                        value={ emailLog }
                    />
                    {errorMessage && !emailLog ? <p className='errormessage'>This field is required</p> : null}
                    
                    <label>Password</label>
                    <input 
                        onChange={ handlePasswordLog }
                        type='password'
                        placeholder='Enter your password'
                        value={ passLog }
                    />
                    {errorMessage && !passLog ? <p className='errormessage'>This field is required</p> : null}

                    <input
                        className='logbtn'
                        type='submit'
                    />
                    <p>Not Registered? Create an account</p>
                </form>
            </div>
            
        </div>
        // </ContextProvider>
    );
}

export default Loggg;
