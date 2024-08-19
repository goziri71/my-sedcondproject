import React, { useEffect, useState } from 'react'
import FirstTopBar from './FirstTopBar';
import SecondtopBar from './SecondtopBar';
import HeroPage from './HeroPage';
import InfoPage from './InfoPage';
import CreateAccount from './CreateAccount';
import Store from "./Store";

function Mainpage() {
  const [first, setfirst] = useState(false);
  
  const openSetFirst = () => {
    setfirst(true);
  }

  const closeSetFirst = () => {
    setfirst(false);
  }

  useEffect(() => {
    console.log(first);
  }, [first])

  return (
    <>
        <CreateAccount setfirst={closeSetFirst} first={first} />
        <FirstTopBar onClick={openSetFirst} />
        <SecondtopBar />
        <HeroPage />
        <InfoPage />
        
    </>
  )
}

export default Mainpage;