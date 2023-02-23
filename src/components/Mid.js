import React from 'react'
import Icon1 from '../Icons/1.png'
import Icon2 from '../Icons/2.png'
import Icon3 from '../Icons/3.png'

import './Mid.css'

function Mid() {
  return (
    <div className='section-2 m-auto bg-mid-blue/5 flex items-center justify-center'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='card mx-6'>
          <img className='flex items-center justify-center m-auto' src={Icon1} alt=''/>
          <p className='text mt-6 mb-2'>Search</p>
          <p className='paragraph text-center m-0'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
        </div>

        <div className='card ml-2'>
          <img  className='flex items-center justify-center m-auto' src={Icon2} alt=''/>
          <p className='text mt-6 mb-2'>Select</p>
          <p className='paragraph text-center m-0'>Choose from thousands of options  generated by the slogan maker that fit your needs.</p>
        </div>

        <div className='card pr-4'>
          <img  className='flex items-center justify-center m-auto' src={Icon3} alt=''/>
          <p className='text mt-6 mb-2'>Stand out</p>
          <p className='paragraph text-center m-0'>Congrats on your new slogan. It's time to win the world!</p>
        </div>
      </div>

    </div>
  )
}

export default Mid