import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function Usainterface() {

  const { users, setUsers } = useContext();
  


  return (
    <div className='usainterface'>
      <h1>Hello welcome { users }</h1>
    </div>
  );
}

export default Usainterface;
