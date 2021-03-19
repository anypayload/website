import React from 'react'
import map from './map.svg'

const WorldMap = ({ children, className }) =>
  <div className={className} style={{ backgroundImage: `url(${map})` }}>
    {children}
  </div>

export default WorldMap;