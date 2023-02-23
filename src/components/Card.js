import React from 'react'
import './Card.css'
import Image1 from '../Images/Rectangle 124.png';
import Image2 from '../Images/Rectangle 125.png';
import Image3 from '../Images/Rectangle 126.png';
import Image4 from '../Images/Rectangle 127.png';

function Home() {
  return (
    <div className='section-3'>
        <div className='mx-40'>
            <p className='sec3-text'>Try our other free products</p>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-evenly'>

                    <div>  
                        <div className='grid-item'><img src={Image1} alt="" /></div>
                        <p className='sec3-mid-text'>Privacy policy generetor</p>
                        <p className='sec3-sm-text'>Stock your store with 100s of products and <br /> start selling to customers in minutes, without the hassle of inventory or packaging</p>
                    </div>

                    <div>
                        <div className='grid-item'><img src={Image2} alt="" /></div>
                        <p className='sec3-mid-text'>Terms & Conditions Generator</p>
                        <p className='sec3-sm-text'>Stock your store with 100s of products and <br /> start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>

                    <div>
                        <div className='grid-item'><img src={Image3} alt="" /></div>
                        <p className='sec3-mid-text'>Domain Name Generator</p>
                        <p className='sec3-sm-text'>Stock your store with 100s of products and <br /> start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>

                    <div>
                        <div className='grid-item'><img src={Image4} alt="" /></div>
                        <p className='sec3-mid-text'>Invoice Generator</p>
                        <p className='sec3-sm-text'>Stock your store with 100s of products and <br /> start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                    </div>
                    
                </div>
            </div> 
        </div>
    </div>
    
  )
}

export default Home