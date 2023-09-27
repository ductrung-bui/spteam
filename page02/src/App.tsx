import React, { useState } from 'react'
import './App.css'

function App() {



  return (
    <>
      <div className='container'>
        <div className='text'>
          Điều khiển đèn Led
        </div>
        <div className='container-led'>
          <div className='container-text'>
            Led status
          </div>
          <div className='led-button'>
            <button className='on'>ON</button>
            <button className='off'>OFF</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
