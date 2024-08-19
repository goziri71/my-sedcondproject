import React, { useState, useEffect, createContext } from 'react'


export const AuthContext = createContext();



function ContextProvider({children}) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
      (() => {
        const validUser = JSON.parse(localStorage.getItem("userDetails"));
        console.log(validUser)
        if(validUser){
          setUser(validUser)
        }
      })()
    }, []);


  return (
    <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider;