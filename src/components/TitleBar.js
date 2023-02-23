import React from 'react'
import './TitleBar.css'
import Logo from '../Icons/white.png'

function TitleBar() {
  return (
    <div className='title'>
      <div className='px-52 pt-8'>
        <div className='title-main'>
          <img className='logo' src={Logo} alt="" />
          <div className='title-main-right'>
            <p className='sign-btn'>Sign In</p>
            <p className='dhuk-btn'>Dukaan for PC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBar