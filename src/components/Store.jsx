import React, { useState, useEffect, useContext } from 'react'
import '../css/style.css'
import axios from 'axios';
import Image from '../config/Image'
import FirstTopBar from './FirstTopBar';
import { AuthContext } from '../context/AuthContext';

function Store({userName}) {
    const [ store, setStore ] = useState([]);
    const [ storeId, setStoreId ] = useState();
    
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user)

    useEffect(() => {
        fetchDetails();
    }, [])


    const fetchDetails = async () => {
        try{
            const response = await axios.get(
                `https://6638b24a4253a866a24ed17d.mockapi.io/users`
            );
            setStore(response.data)
        } catch (error) {
            console.log('error fetching data:', error)
        }
    }

    
    

  return (
    <div className='comercbody'>
        <FirstTopBar />
        <h3>ALL BLACK TOPS {user.name?.toUpperCase()}</h3>
        <div className='comercfix'>
             {store.map((item) => (
                <div className='imagebody' key={item.id}>
                    <p> <br/> {`${item.name} ${item.price}`}</p>
                </div>
             ))}
        </div>
    </div>
  )
}

export default Store