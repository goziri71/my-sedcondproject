import React from 'react'
import IconsPage from './IconsPage'
import NavPage from './NavPage'

function SecondtopBar() {
  return (
    <div className='secondtopbar'>
        <div className='tyche'>
            <IconsPage name='fontisto:shopping-bag' color='white' size='35' />
            <h3>Tyche</h3>
        </div>
        <NavPage />
    </div>
  )
}

export default SecondtopBar;