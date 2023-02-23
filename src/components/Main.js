import React from 'react'
import './Main.css'

function Main() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div className='main px-48'>
            <div className='hero'>
                <p className='main-header'>Free slogan maker</p>
                <p className='main-paragraph'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
                <p className='small-text'>Word for your slogan</p>
                <input type="text" placeholder=' cozy' />
                <p className='btn text-center'><a href="##">Generate slogans</a></p>
                <hr className='hr1' />
                <div className='btn-section'>
                    <p className='medium-text'>We have generated 1,023 slogans for “cozy” </p>
                    <p className='download-btn'>Download all</p>
                </div>
            </div>
            <div className='list grid grid-cols-2 gap-8'>
                <div>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left-extra'>Review the facts cool is the best.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                    <p className='list-element-left'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                </div>
                <div>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>Review the facts cool is the best.</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                    <p className='list-element-right'>coziness building for tomorrow</p>
                </div>
                <hr className='hr2' />
            </div>
            <div className='last-section'>
                <div></div>
                <div className='last-section-numbers'>
                    <p className='px-2 ml-8 mr-1 number1'>1</p>
                    <p className='px-3'>2</p>
                    <p className='px-3'>3</p>
                    <p className='px-3'>...</p>
                    <p className='px-3'>21</p>
                </div>
                <p className='last-section-elements'>Next ></p>
            </div>
        </div>
    </div>
  )
}

export default Main