import React from 'react'
import { Icon } from '@iconify/react';
import '../css/style.css'

function IconsPage( { name, color, size, data } ) {
  return (
    <div>
        <Icon icon={name} color={color} width={size} onClick={data} />
    </div>
  )
}

export default IconsPage;