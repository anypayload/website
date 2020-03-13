import React from 'react'
import map from './map.svg'

export default ({children, className}) => 
  <div className={className} style={{backgroundImage: `url(${map})`}}>
    {children}
  </div>