import React, {useState, useMemo} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function useLogin() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const login = async (email, password) => {
        const response = await axios.get(
            `https://6638b24a4253a866a24ed17d.mockapi.io/users`
        );
        const result = await response.data
        const userArray = result.filter(user => user.email === email && user.password === password);
        console.log(userArray[0])
        if(userArray){
          setUser(userArray[0])
          localStorage.setItem("userDetails", JSON.stringify(userArray[0]));
          navigate('/store')
        }
        return userArray[0]
    }
   
    console.log(user)
  return {login, user}
}

export default useLogin