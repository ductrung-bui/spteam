import React, { useState } from 'react'
import './App.css'
import Component from './page/Component'

function App() {
  return (
    <div className='container'>
      <div className="bigList">
        <div className="list">
          List of Farms
        </div>
      </div>
      <div className='image'>
        <Component></Component>
        <Component></Component>
        <Component></Component>
      </div>
    </div>
  )
}

export default App
