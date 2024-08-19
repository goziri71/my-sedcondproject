import React, { useState, useEffect} from 'react'
import '../css/style.css'
import IconsPage from './IconsPage'
import axios from 'axios'
import { Link } from 'react-router-dom';
import 'ldrs/ring'

function CreateAccount({first, setfirst }) {


    const handleAdd = () => {
        const remove = document.querySelector(".createAccountaligner")
        remove.classList.add("removeid")
    };

    

    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [submited, setSubmited] = useState(false);

    


    const handleFullName = (event) => {
        setFullName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        fetchUsers();
    }, []);



    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                'https://6638b24a4253a866a24ed17d.mockapi.io/users'
            );
            setUsers(response.data)
        } catch (error) {
            console.error('error fetching user:', error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmited(true);
        try {
           const response = await axios.post(
                'https://6638b24a4253a866a24ed17d.mockapi.io/users', 
                { name, email, password }
            );
            console.log(response)
            fetchUsers();
            setFullName('');
            setEmail('');
            setPassword('');
            handleAdd();
            setSubmited(false);
        } catch (error) {
            console.error('error edding user:', error)
        };
    
    };


  return (
<>
    <div className={`createAccountaligner ${first ? "" : "removeid" }`}>

        <div className='createacc'>

            <div className='cancel' onClick={ () => setfirst(true) } >
                <IconsPage 
                    name='mdi:cancel-bold'
                    color='white'
                    size='30'
                />
            </div>
            <h2>Sign Up 😊</h2>

            {submited ? <div className='succesmesage'>
                
            <h2>Registration successful! 😘</h2>

                <div class="container">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>

            <p>please wait...</p>
            </div>  : null}

            <form onSubmit={ handleSubmit }>
                <label>Enter Full name</label>
                <input 
                    onChange={ handleFullName }
                    type='text'
                    placeholder='Enter your name'
                    value={ name }
                    required
                />
                
                <label>Enter Email</label>
                <input 
                    onChange={ handleEmail }
                    type='email'
                    placeholder='Enter your email'
                    value={ email }
                    required
                />
                
                <label>Create Password</label>
                <input 
                    onChange={ handlePassword }
                    type='password'
                    placeholder='create a new password'
                    value={ password }
                    required
                />
                

                <input 
                    className='sumitbtn'
                    type='submit'
                />
                <div>already have an account? <Link to="/Loggg">log in</Link></div>

            </form>
        </div>

    </div>

    

</>
    
  )
}

export default CreateAccount;