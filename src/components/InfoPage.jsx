import React from 'react'
import IconsPage from './IconsPage';

function InfoPage() {
  return (
    <div className='infocontainer'>
        <div>
            <IconsPage
                name='mdi:world' color='#fff' size='28'
            />
            <div className='  '>
                <h4>FREE SHIPPING</h4>
                <p>On all orders over 80$</p>
            </div>
        </div>

        <div>
            <IconsPage
                name='fluent-mdl2:cell-phone' color='#fff' size='28'
            />
            <div className='infotextspace'>
                <h4>CALL US ANYTIME</h4>
                <p>+9058708101</p>
            </div>
        </div>

        <div>
            <IconsPage
                name='uiw:map' color='#fff' size='28'
            />
            <div className='infotextspace'>
                <h4>OUR LOCATION</h4>
                <p>324-3873 sangotedo aptech</p>
            </div>
        </div>
    </div>
  )
}

export default InfoPage;