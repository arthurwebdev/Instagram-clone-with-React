import React, { memo } from 'react'
import IMAGES from '../../images'
import './Story.css'

function Story({img, name}) {
  return (
    <div className="status-card">
        <div className="profile-pic"><img src={img} alt=""/></div>
        <p className="username">{name}</p>
    </div>
  )
}

export default memo(Story)