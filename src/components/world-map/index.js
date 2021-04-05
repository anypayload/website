import React from 'react'
import map from './map.svg'

const WorldMap = ({ children, className }) =>
  <div className={className} style={{ backgroundImage: `url(${map})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
    {children}
  </div>

export default WorldMap;