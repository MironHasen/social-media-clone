import React from 'react'
import './Video.css'
import Playvideo from '../../components/playvideo/Playvideo'
import Recommended from '../../components/recommended/Recommended'

const Video = () => {
  return (
    <div className='play_container'>
      <Playvideo/>
      <Recommended/>
    </div>
  )
}

export default Video