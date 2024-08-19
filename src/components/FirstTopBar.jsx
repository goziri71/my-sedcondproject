import React, { useState, useEffect} from 'react';
import '../css/style.css';
import Searchcomp from './Searchcomp';
import IconsPage from './IconsPage';
import { Link } from 'react-router-dom';

function FirstTopBar({onClick}) {


  return (
    <>
        <div className='TopBarContainer'>

                <div className='boxfirst'>
                    <IconsPage name='ep:message' color='white' size='18' />
                    <p>goziri71@gmail.com</p>
                </div>

                <div className='Topcontainersection2'>
                    
                    <div className='box1'>
                        <Searchcomp />
                    </div>

                    <div className='box2' onClick={ () => onClick(true)} >
                        <IconsPage name='fluent-mdl2:contact' color='white' size='18' />
                        <p>Account</p>
                    </div>

                    <Link to="/Loggg">
                        <div className='box2'>
                            <IconsPage name='fluent-mdl2:contact' color='white' size='18' />
                            <p>Login</p>
                        </div>
                    </Link>

                    <div className='box3'>
                        <IconsPage name='icon-park-solid:shopping' color='white' size='18' />
                        <p>My Cart - $0 </p>
                    </div>

                </div>
        </div>
    </>
  )
}

export default FirstTopBar;